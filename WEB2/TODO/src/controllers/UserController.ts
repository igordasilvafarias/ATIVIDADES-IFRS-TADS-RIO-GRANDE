import { IUser, User, UserRole } from "../models/User";
import { Request, Response } from "express";
import bcrypt from 'bcrypt';

export class UserController {

    showSignupPage(request: Request, response: Response) {
        response.render('user/signupPage');
    }

    showLoginPage(request: Request, response: Response): void {
        response.render('user/loginPage');
    }

    async signupUser(request: Request, response: Response) {
        try {
            const newUser = request.body as IUser;

            const hash = await bcrypt.hash(newUser.password, 10);
            newUser.password = hash;

            newUser.role = UserRole.REGULAR;
            const result = await User.save(newUser);
            response.redirect('/');
        } catch (error) {
            console.log('Error add user: ', error);
        }
    }

    async authLogin(request: Request, response: Response) {
        const { email, password } = request.body;
        const user = await User.getByEmail(email);

        const passwordMatch = await bcrypt.compare(password, user.password)

        if(passwordMatch) {
            request.session.data = {
                loggedIn: true,
                user: email,
                role: user.role,
                name: user.name,
                id: user.id
            }
            response.redirect('/')
        } else {
            response.render('errors/loginError');
        }
    }

}