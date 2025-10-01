import { NextFunction, Request, Response }  from 'express';
import { CustomError } from '../errors/custom-errors';


export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction)=>{

    if (err instanceof CustomError){
        return res.status (err.statusCode).json(err.serializeErrror())
    }

    res.status(500).json({mesage : 'Internal server error'})
}