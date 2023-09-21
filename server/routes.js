const express = require("express");
const httpStatusCode = require("http-status-codes") 

const apiRouter = express.Router();

const apiRoutes = () => {
    return apiRouter
        .get("/health-check", (req, res) => {
            res.status(httpStatusCode.OK).json({
                success: true,
                message: "hospital staff management server is up and running"
            });
        });
};

module.exports = apiRoutes;
