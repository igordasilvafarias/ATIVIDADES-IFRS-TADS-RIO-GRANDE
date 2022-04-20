import Joi from "joi";

const passPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*\\W)[a-zA-Z0-9\\S]{8,}$";
const namePattern = "^(?=.*[a-z])";

const UserValidator = Joi.object({
    name: Joi.string().min(3).max(50).trim().required().pattern(new RegExp(namePattern)).messages({
        "string.empty": "O nome é um campo obrigatório.",
        "string.min": "O nome deve ter pelo menos 3 letras.",
        "string.max": "O nome não pode passar de 50 letras.",
        "string.pattern.base": "O nome deve ser preenchido com caracteres minúsculos."
    }),
    password: Joi.string().pattern(new RegExp(passPattern)).messages({
        "string.pattern.base": "Pelo menos 8 caracteres, sendo 1 letra minúscula, 1 maiúscula, 1 número e um caracter especial."
    })
});

export { UserValidator };