import { Router } from "express";

import todosRouter from './todos'

const router = Router();

router.use ('/todos', todosRouter);

router.all('*path',(req, res) => {
   res.status(404).send('<h1>Nothing found.');
});

export default router;