import bcrypt from 'bcrypt';
import session from 'express-session';
import { User } from '../models';
import { Request, Response } from 'express';
import { UserValidator } from '../validators/validator';

export class AuthController {

    showSignup(req: Request, res: Response) {
        res.render('user/signup');
    }

    async signup(req: Request, res: Response) {

        console.log(req.body)

        const validation = UserValidator.validate(req.body, { abortEarly: false });

        const errors: any = new Object()
        if (validation.error) {
            for (const error of validation.error.details) {
                errors[error.path[0]] = error.message;
            }
        }

        if (Object.keys(errors).length > 0) {
            res.render('user/signup', { errors });
        } else {

            const newUser = req.body;
            const hash = await bcrypt.hash(newUser.password, 10);
            newUser.password = hash;

            User.create(newUser)
                .then(result => {
                    res.render('user/signupSuccess', newUser);
                })
                .catch(error => {
                    res.render('user/signup', { errors: { name: "nome já utilizado" } });
                })
        }
    }

    showLogin(req: Request, res: Response) {
        res.render('user/login');
    }

    async login(req: Request, res: Response) {

        const { name, password } = req.body;

        const user: any = await User.findOne({ where: { name } });

        if (!user) {
            const userError = "Usuario nao encontrado."
            return res.render('user/login', { userError, name });
        }

        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {
            const passwordError = "Senha Incorreta."
            return res.render('user/login', { passwordError });
        }

        req.session.data = user;
        return res.render('user/loginSuccess', { user: req.session.data });

    }

    logout(req: Request, res: Response) {
        req.session.destroy(error => {
            console.log(error);
        });
        res.redirect('/login');
    }

}