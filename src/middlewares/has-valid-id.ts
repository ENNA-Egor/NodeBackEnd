import { NextFunction, Request, Response } from "express";
import { json } from "stream/consumers";

export const hasValidId = (req: Request, res: Response, next: NextFunction) => {
    if (Number.isNaN(+req.params.id)){
        res.status(400). json({mesage: 'Incorected Id'})
    }
    next()
}