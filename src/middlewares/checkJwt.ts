import {NextFunction, Request, Response} from "express";
import * as jwt from "jsonwebtoken";
import config from "../config/config";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    // Get the jwt from the head
    const token = <string>req.headers["auth"];
    let jwtPayload;

    // Try to validate and get data
    try {
        jwtPayload = <any>jwt.verify(token, config.jwtSecret);
        res.locals.jwtPayload = jwtPayload;
    } catch (e) {
        // 401 = unauthorized
        res.status(401).send();
        return;
    }


    // The token is valid for 1 hour
    // We want to send a new token on every request

    const {userId, username} = jwtPayload;
    const newToken = jwt.sign({userId, username}, config.jwtSecret, {
        expiresIn: "1h"
    });
    res.setHeader("token", newToken);
    // Call the nxt middleware or controller
    next();
};