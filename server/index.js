const dotEnv = require("dotenv");
const http = require("http");

dotEnv.config();

const serverInit = require("./config/express");
const logger = require("./config/logger")("index");

// MongoDB connection config
require("./config/mongoDbConn");

const init = () => {
    try {
        const port = process.env.PORT || 3000;
        const app = serverInit();
        http.createServer(app).listen(port);
        logger.info({ method: "init" }, `Server is up and running on the ${port}`);
    } catch (error) {
        logger.error({ method: "init" }, "Unable to bring server up and running!!!", error);
    }
};

init();
