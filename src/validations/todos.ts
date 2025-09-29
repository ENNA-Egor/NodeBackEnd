import {celebrate, Joi, Segments} from 'celebrate';

export const validationTodoBody = celebrate({
    [Segments.BODY]:{
        title: Joi.string().required().min(2),
        completed: Joi.boolean().required()
    }
});