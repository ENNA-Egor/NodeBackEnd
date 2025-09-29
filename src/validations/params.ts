import {celebrate, Joi, Segments} from 'celebrate';

export const validationParams = celebrate({
    [Segments.PARAMS]:{
        id : Joi.number().required(),
    },
});