const httpStatusCode = require("http-status-codes");
const { snakeCase, random, upperCase } = require("lodash");
const moment = require("moment");

const { Role: RoleSchema } = require("../../model/role");
const { Staff: StaffSchema } = require("../../model/staff");

const logger = require("../../config/logger")("staffController");

const getStaff = async (req, res) => {
    try {
        logger.info({ method: "getRole" }, "entering getRole", req.query);
        const { name = "" } = req.query;

        const [role] = await StaffSchema.aggregate([
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

const getRole = async (payload) => {
    try {
        const role = await RoleSchema.findOne(payload);
        return role;
    } catch (error) {
        logger.error({ method: "getRole" }, "something went wrong", payload);
        return null;
    }
}

const createStaff = async (req, res) => {
    try {
        logger.info({ method: "createStaff" }, "entering createStaff", req.body);

        const id = `ST-${moment().format('YYMMDDHHmmss')}${random(1000, 9999)}`;

        const {
            name = "",
            emailId = "",
            role = "",
            age,
            gender,
            department = ""
        } = req?.body;

        const { rlId: roleId = "" } = await getRole({ formattedName: snakeCase(role) }) || {};

        if (!roleId) {
            logger.warn({ method: "createStaff" }, `${role} does not exist`);
            return res.status(httpStatusCode.BAD_REQUEST).send({
                success: false,
                message: `${role} does not exist, please provide the valid role`,
            })
        }
        console.log("staff", req.body, roleId);

        const payload = {
            staffId: id,
            name,
            emailId,
            roleId,
            age,
            department,
            gender: upperCase(gender),
            status: "ACTIVE"
        };

        const create = await StaffSchema.create(payload);
        res.status(httpStatusCode.OK).send({
            success: true,
            message: "Staff created successfully",
        });
    } catch (error) {
        logger.error({ method: "createStaff" }, "something went wrong", req.body, error);
        return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: "Something went wrong, please reach out abc@abc.com"
        })
    }
};

module.exports = {
    getStaff,
    createStaff,
};
