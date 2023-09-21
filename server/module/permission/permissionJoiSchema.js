const Joi = require('joi');

const createPermissionSchema = Joi.object({
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

const getPermissionSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(20)
        .required(),
});

module.exports = {
    createPermissionSchema,
    getPermissionSchema,
};
