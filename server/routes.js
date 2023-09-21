const express = require("express");
const httpStatusCode = require("http-status-codes");

const apiRouter = express.Router();

const permissionRoute = require("./module/permission/permissionRoute");
const roleRoute = require("./module/role/roleRoute");
const staffRoute = require("./module/staff/staffRoute");

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
