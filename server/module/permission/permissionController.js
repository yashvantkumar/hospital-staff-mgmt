const httpStatusCode = require("http-status-codes");

const PermissionSchema = require("../../model/permission");

const logger = require("../../config/logger")("permissionController");

const getPermission = async (req, res) => {
    try {
        logger.info({ method: "getPermission" }, "entering getPermission", req.params);
        console.log("req", req.body)
    } catch (error) {
        logger.error({ method: "getPermission" }, "something went wrong", req.params, error);
        return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: "Something went wrong, please reach out abc@abc.com"
        });
    }
};

const createPermission = async (req, res) => {
    try {
        logger.info({ method: "createPermission" }, "entering createPermission", req.body);
        res.status(httpStatusCode.OK).send({
            success: true
        });
    } catch (error) {
        logger.error({ method: "createPermission" }, "something went wrong", req.body, error);
        return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: "Something went wrong, please reach out abc@abc.com"
        })
    }
};

module.exports = {
    getPermission,
    createPermission,
};
