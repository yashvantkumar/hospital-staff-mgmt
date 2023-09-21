const httpStatusCode = require("http-status-codes");
const { snakeCase, random } = require("lodash");
const moment = require("moment");

const { Permission: PermissionSchema } = require("../../model/permission");

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

        const id = `PR-${moment().format('YYMMDDHHmmss')}${random(1000, 9999)}`;

        const { 
            name = "",
            permissions = [],
        } = req?.body;

        const formattedName = snakeCase(name);

        const payload = {
            id,
            name,
            formattedName,
            permissions
        }
        const create = await PermissionSchema.create(payload);
        res.status(httpStatusCode.OK).send({
            success: true,
            message: "Permission created successfully",
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
