const httpStatusCode = require("http-status-codes");
const { snakeCase, random } = require("lodash");
const moment = require("moment");

const { Role: RoleSchema } = require("../../model/role");
const { Permission: PermissionSchema } = require("../../model/permission");

const logger = require("../../config/logger")("roleController");

const getRole = async (req, res) => {
    try {
        logger.info({ method: "getRole" }, "entering getRole", req.query);
        const { name = "" } = req.query;

        const [role] = await RoleSchema.aggregate([
            {
                $match: {
                    formattedName: snakeCase(name)
                }
            }, {
                $lookup: {
                    from: 'permissions',
                    localField: 'permissionId',
                    foreignField: 'id',
                    as: 'permissions'
                }
            }
        ]);

        if (!role) {
            return res.status(httpStatusCode.BAD_REQUEST).send({
                success: false,
                message: `Role ${name} does not exist`
            });
        }

        return res.status(httpStatusCode.OK).send({
            success: true,
            name: role?.name,
            description: role?.description,
            permissions: role?.permissions.map((eachPermission) => eachPermission.name),
        });
    } catch (error) {
        logger.error({ method: "getRole" }, "something went wrong", req.params, error);
        return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: "Something went wrong, please reach out abc@abc.com"
        });
    }
};

const getPermission = async (payload) => {
    try {
        const permission = await PermissionSchema.findOne(payload);
        return permission;
    } catch (error) {
        logger.error({ method: "getPermission" }, "something went wrong", payload);
        return null;
    }
}

const createRole = async (req, res) => {
    try {
        logger.info({ method: "createRole" }, "entering createRole", req.body);

        const id = `RL-${moment().format('YYMMDDHHmmss')}${random(1000, 9999)}`;

        const {
            name = "",
            permission = "",
            description = ""
        } = req?.body;

        const formattedName = snakeCase(name);

        const { id: permissionId = "" } = await getPermission({
            formattedName: permission
        }) || {};

        if (!permissionId) {
            logger.warn({ method: "createRole" }, `${permission} does not exist`);
            return res.status(httpStatusCode.BAD_REQUEST).send({
                success: false,
                message: `${permission} permission does not exist`
            });
        };

        const payload = {
            id,
            name,
            formattedName,
            permissionId,
            description,
            status: "ACTIVE",
        };
        const create = await RoleSchema.create(payload);
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
