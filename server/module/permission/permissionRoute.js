const Router = require("express-promise-router");

const permissionController = require("./permissionController");

const {
    validateCreatePermission,
} = require("./permissionMiddleware");

module.exports = () => {
    const router = Router({ mergeParams: true });

    router.route("/")
        .put(validateCreatePermission, permissionController.createPermission)

    return router;
};
