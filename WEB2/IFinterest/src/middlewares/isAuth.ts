import { NextFunction, Request, Response } from "express";
import session from "express-session";

function isAuth(request: Request, response: Response, next: NextFunction): void {
    if (request.session.data)
    next();
else 
    response.redirect('/');
}

export {
    isAuth,
}