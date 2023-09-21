const Joi = require('joi');
const httpStatusCode = require("http-status-codes");

const logger = require("../../config/logger")("permissionMiddleware");

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

const validateCreatePermission = (req, res, next) => {
    try {
        const reqBody = req.body || {};
        const value = createPermissionSchema.validate(reqBody);

        if (value?.error) {
            logger.warn({ method: "validateCreatePermission" }, "validation failure", value);
            const validationErrors = value?.error.details.map((eachError) => eachError.message)
            return res.status(httpStatusCode.BAD_REQUEST).send({
                success: false,
                message: validationErrors
            });
        };
        next();
    } catch (error) {
        logger.error({ method: "validateCreatePermission" }, "something went wrong", error);
        return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: "Something went wrong, please reach out abc@abc.com"
        });
    }
};

const validateGetPermission = (req, res, next) => {
    try {
        const reqQuery = req.query;
        const value = getPermissionSchema.validate(reqQuery);

        if (value?.error) {
            logger.warn({ method: "validateGetPermission" }, "validation failure", value);
            const validationErrors = value?.error.details.map((eachError) => eachError.message)
            return res.status(httpStatusCode.BAD_REQUEST).send({
                success: false,
                message: validationErrors
            });
        };
        next();
    } catch (error) {
        logger.error({ method: "validateGetPermission" }, "something went wrong", error);
        return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: "Something went wrong, please reach out abc@abc.com"
        });
    }
};

module.exports = {
    validateCreatePermission,
    validateGetPermission,
};
