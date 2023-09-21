const Router = require("express-promise-router");

const permissionController = require("./permissionController");

module.exports = () => {
    const router = Router({ mergeParams: true });

    router.route("/")
        .get(permissionController.getPermission)
        .put(permissionController.createPermission)

    return router;
};
