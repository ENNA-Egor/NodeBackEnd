import { NextFunction, Request, Response } from "express";
import { json } from "stream/consumers";
import { BadRequestError } from "../errors/bad-request-error";

export const hasValidId = (req: Request, res: Response, next: NextFunction) => {
    if (Number.isNaN(+req.params.id)){
        // res.status(400). json({mesage: 'Incorected Id'})
         throw new BadRequestError ('Invalid ID')
    }
    next()
}