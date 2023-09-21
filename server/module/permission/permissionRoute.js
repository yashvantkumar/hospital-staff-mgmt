const Router = require("express-promise-router");

const permissionController = require("./permissionController");

const {
    validateCreatePermission,
    validateGetPermission
} = require("./permissionMiddleware");

module.exports = () => {
    const router = Router({ mergeParams: true });

    router.route("/")
        .get(validateGetPermission, permissionController.getPermission)
        .put(validateCreatePermission, permissionController.createPermission)

    return router;
};
