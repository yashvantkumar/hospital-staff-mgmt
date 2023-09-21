const joiSchemaValidator = require("../../common/joiSchemaValidator");

const {
    createStaffSchema,
    getStaffSchema,
} = require("./staffJoiSchema");

const validateGetStaff = (req, res, next) => joiSchemaValidator({
    joiSchema: getStaffSchema,
    payload: req.query,
    validationType: "validateGetStaff",
}, req, res, next);

const validateCreateStaff = (req, res, next) => joiSchemaValidator({
    joiSchema: createStaffSchema,
    payload: req.body,
    validationType: "validateCreateStaff",
}, req, res, next);

module.exports = {
    validateCreateStaff,
    validateGetStaff,
};
