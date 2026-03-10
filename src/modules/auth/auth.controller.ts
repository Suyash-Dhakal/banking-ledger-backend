import { Request, Response, NextFunction} from 'express';
import { registerUser, loginUser } from './auth.service.js';

export async function userRegisterController(req: Request, res: Response, next: NextFunction) {
    try {
        const { user, token } = await registerUser(req.body);
        res.status(201).json({
            user,
            token
        });
    } catch (error) {
        next(error);
    }
}

export async function userLoginController(req: Request, res: Response, next: NextFunction) {
    try {
        const { user, token } = await loginUser(req.body);
        res.status(200).json({
            user,
            token
        });
    } catch (error) {
        next(error);
    }
}