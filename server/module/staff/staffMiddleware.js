const joiSchemaValidator = require("../../common/joiSchemaValidator");

const {
    createStaffSchema,
    emailIdSchema,
    updateStaffSchema
} = require("./staffJoiSchema");

const validateGetStaff = (req, res, next) => joiSchemaValidator({
    joiSchema: emailIdSchema,
    payload: req.query,
    validationType: "validateGetStaff",
}, req, res, next);

const validateCreateStaff = (req, res, next) => joiSchemaValidator({
    joiSchema: createStaffSchema,
    payload: req.body,
    validationType: "validateCreateStaff",
}, req, res, next);

const validateDeleteStaff = (req, res, next) => joiSchemaValidator({
    joiSchema: emailIdSchema,
    payload: req.body,
    validationType: "validateDeleteStaff",
}, req, res, next);

const validateUpdateStaff = (req, res, next) => joiSchemaValidator({
    joiSchema: updateStaffSchema,
    payload: req.body,
    validationType: "validateUpdateStaff",
}, req, res, next);

module.exports = {
    validateCreateStaff,
    validateGetStaff,
    validateDeleteStaff,
    validateUpdateStaff,
};
