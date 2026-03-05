import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";

export function globalErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    if(err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message,
        })
    }

    console.error(err) // log unexpected errors
    res.status(500).json({
        message: "An unexpected error occurred.",
    })
}