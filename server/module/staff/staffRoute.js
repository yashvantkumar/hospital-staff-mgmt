const Router = require("express-promise-router");

const staffController = require("./staffController");

const {
    validateCreateStaff,
    validateGetStaff,
    validateDeleteStaff,
    validateUpdateStaff,
} = require("./staffMiddleware");

module.exports = () => {
    const router = Router({ mergeParams: true });

    router.route("/")
        .get(validateGetStaff, staffController.getStaff)
        .put(validateCreateStaff, staffController.createStaff)
        .delete(validateDeleteStaff, staffController.deleteStaff)
        .post(validateUpdateStaff, staffController.updateStaff)

    return router;
};
