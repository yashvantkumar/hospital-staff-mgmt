const httpStatusCode = require("http-status-codes");
const { snakeCase, random } = require("lodash");
const moment = require("moment");

const { Role: RoleSchema } = require("../../model/role");

const logger = require("../../config/logger")("roleController");

const getRole = async (req, res) => {
    try {
        logger.info({ method: "getRole" }, "entering getRole", req.query);
        const { name = "" } = req.query;

        const permission = await RoleSchema.findOne({formattedName: snakeCase(name)});

        if (permission === null) {
            return res.status(httpStatusCode.BAD_REQUEST).send({
                success: false,
                message: `Role ${name} does not exist`
            });
        }

        return res.status(httpStatusCode.OK).send({
            success: true,
            name: permission?.name,
            description: permission?.description,
            permissions: permission?.permissions
        });
    } catch (error) {
        logger.error({ method: "getRole" }, "something went wrong", req.params, error);
        return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: "Something went wrong, please reach out abc@abc.com"
        });
    }
};

const createRole = async (req, res) => {
    try {
        logger.info({ method: "createRole" }, "entering createRole", req.body);

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
        // const create = await RoleSchema.create(payload);
        res.status(httpStatusCode.OK).send({
            success: true,
            message: "Role created successfully",
        });
    } catch (error) {
        logger.error({ method: "createRole" }, "something went wrong", req.body, error);
        return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: "Something went wrong, please reach out abc@abc.com"
        })
    }
};

module.exports = {
    getRole,
    createRole,
};
