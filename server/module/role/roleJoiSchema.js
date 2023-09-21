const Joi = require('joi');

const createRoleSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(20)
        .required(),
    description: Joi.string()
        .min(3)
        .max(100)
        .required(),
    permission: Joi.string()
        .min(3)
        .max(20)
        .required(),
});

const getRoleSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(20)
        .required(),
});

module.exports = {
    createRoleSchema,
    getRoleSchema,
};
