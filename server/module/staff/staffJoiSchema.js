const Joi = require('joi');

const createStaffSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(20)
        .required(),
    age: Joi.number()
        .integer()
        .min(20)
        .max(100)
        .required(),
    role: Joi.string()
        .min(3)
        .max(20)
        .required(),
    gender: Joi.string()
        .allow("MALE", "FEMALE", "OTHER")
        .required(),
    department: Joi.string()
        .required(),
    emailId: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'in', 'co', 'net'] } })
        .required()
});

const emailIdSchema = Joi.object({
    emailId: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'in', 'co', 'net'] } })
        .required()
});

const updateStaffSchema = Joi.object({
    staffId: Joi.string()
        .required(),
    role: Joi.string()
        .min(3)
        .max(20),
    gender: Joi.string()
        .allow("MALE", "FEMALE", "OTHER"),
    department: Joi.string(),
    name: Joi.string(),
    emailId: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'in', 'co', 'net'] } })
});

module.exports = {
    createStaffSchema,
    emailIdSchema,
    updateStaffSchema,
};
