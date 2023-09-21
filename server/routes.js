const express = require("express");
const httpStatusCode = require("http-status-codes");

const apiRouter = express.Router();

const permissionRoute = require("./module/permission/permissionRoute");
const roleRoute = require("./module/role/roleRoute");
const staffRoute = require("./module/staff/staffRoute");

apiRouter.use((req, res, next) => {
    const { x_api_key = "" } = req.headers;
    // Based on the oAuth or user name and password security can be added
    if (process.env.SECRET_TOKEN === x_api_key || req.path.includes("health-check")) {
        return next();
    }

    return res.status(httpStatusCode.UNAUTHORIZED).send({
        success: false,
        message: "Unauthorized",
    })
});

const apiRoutes = () => {
    return apiRouter
        .use("/permission", permissionRoute())
        .use("/role", roleRoute())
        .use("/staff", staffRoute())
        .get("/health-check", (req, res) => {
            res.status(httpStatusCode.OK).json({
                success: true,
                message: "hospital staff management server is up and running"
            });
        });
};

module.exports = apiRoutes;
