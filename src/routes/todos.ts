import {Router} from 'express'
import { getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo} from '../controllers/todos';
import {hasValidId} from '../middlewares/has-valid-id'


const router = Router();

router.get ('/', getAllTodos);

router.get ('/:id', hasValidId);
router.get ('/:id', getTodoById);

router.post ('/', createTodo);

router.put ('/:id', hasValidId, updateTodo);

router.delete ('/:id', [hasValidId], deleteTodo);

export default router;