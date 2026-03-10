import { Request, Response, NextFunction } from "express"
import { ZodError, ZodType } from "zod"
import { AppError } from "../errors/appError.js"

export const validate = (schema: ZodType) => (req: Request, _res: Response, next: NextFunction) => {
  try {
    schema.parse(req.body)
    next()
  } catch (err) {
    if (err instanceof ZodError) {
      throw new AppError(err.issues[0].message, 400)
    }
    next(err)
  }
}