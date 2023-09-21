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
    permissions: Joi.array()
        .min(1)
        .items(Joi.string().valid("CREATE", "UPDATE", "READ", "DELETE"))
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
