import {Router} from 'express';
import {celebrate, Joi, Segments} from 'celebrate';

import {validationTodoBody} from '../validations/todos'
import {validationParams} from '../validations/params'
import { getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo} from '../controllers/todos';
import {hasValidId} from '../middlewares/has-valid-id';
import { join } from 'path';


const router = Router();

router.get ('/', getAllTodos);

router.get ('/:id',[validationParams], getTodoById);

router.post ('/', [validationTodoBody], createTodo);

router.put ('/:id', [hasValidId], updateTodo);

router.delete ('/:id', [hasValidId], deleteTodo);

export default router;  