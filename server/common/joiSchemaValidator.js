const httpStatusCode = require("http-status-codes");

const logger = require("../config/logger")("joiSchemaValidator");

const validateUserRequest = ({
    joiSchema,
    payload,
    validationType = ""
}, req, res, next) => {
    try {
        const value = joiSchema.validate(payload);
        if (value?.error) {
            logger.warn({ method: "validateUserRequest" }, `validation failure for ${validationType}`, value);
            const validationErrors = value?.error.details.map((eachError) => eachError.message)
            return res.status(httpStatusCode.BAD_REQUEST).send({
                success: false,
                message: validationErrors
            });
        };
        next();
    } catch (error) {
        logger.error({ method: "validateUserRequest" }, `something went wrong for ${validationType}`, error);
        return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: "Something went wrong, please reach out abc@abc.com"
        });
    }
};

module.exports = validateUserRequest;
