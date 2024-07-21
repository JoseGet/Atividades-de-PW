import { NextFunction, Request, Response } from "express";

const checkAuth = (req:Request, res: Response, next:NextFunction) => {
    if (!req.session.uid) res.redirect("/auth/login");
    else next();
    
}