import { Router, Request, Response } from "express";

import todosRouter from './todos'

import pagesRouter from './pages'

const router = Router();

router.use ('/todos', todosRouter);

router.use ('/', pagesRouter)



export default router;