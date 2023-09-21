const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const apiRoutes = require("../routes");

const expressApp = express();

const apiVersion = process.env?.API_VERSION || "v1"

const serverInit = () => {
    try {
        expressApp.use(bodyParser.json({ limit: '50mb' }));
        expressApp.use(
            bodyParser.urlencoded({
                extended: true,
            })
        );
        expressApp.use(bodyParser.json({}));
        expressApp.use(
            cors({
                origin: true,
                credentials: true
            })
        )

        expressApp.use(`/api/${apiVersion}`, apiRoutes());

        return expressApp;
    } catch (error) {
        return expressApp;
    }
};

module.exports = serverInit;
