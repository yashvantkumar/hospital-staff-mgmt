const Router = require("express-promise-router");

const roleController = require("./roleController");

const {
    validateCreateRole,
    validateGetRole
} = require("./roleMiddleware");

module.exports = () => {
    const router = Router({ mergeParams: true });

    router.route("/")
        .get(validateGetRole, roleController.getRole)
        .put(validateCreateRole, roleController.createRole)

    return router;
};
