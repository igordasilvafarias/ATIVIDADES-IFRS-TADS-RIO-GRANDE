import { NextFunction, request, Request, Response } from "express";
import { UserRole } from "../models/User";
import session from "express-session";

function isAuth(request: Request, response: Response, next: NextFunction): void {

    const logged = request.session.data?.loggedIn;
    if(logged) {
        console.log("LOGADO")
        next()
    } else {
        console.log("Nao LOGADO")
        response.redirect('/')
    }

}

function checkRole(role: UserRole) {
    return (request: Request, response: Response, next: NextFunction) => {
        if(request.session.data?.role == role) return next();
        return response.status(403).redirect('/');
    }
}

function checkUserItemsOrAdmin(request: Request, response: Response, next: NextFunction): void {
    if(request.session.data.role == UserRole.ADMIN) next();
}

export {
    isAuth,
    checkRole,
    checkUserItemsOrAdmin
}