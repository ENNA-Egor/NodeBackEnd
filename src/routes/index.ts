import { Router, Request, Response } from "express";

import todosRouter from './todos'

const router = Router();

router.use ('/todos', todosRouter);

router.all('*path',(req:Request, res:Response) => {
   res.status(404).send('<h1>Nothing found.');
});

export default router;