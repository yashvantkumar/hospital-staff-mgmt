const dotEnv = require("dotenv");
const http = require("http");

dotEnv.config();

const serverInit = require("./config/expressConfig");

// MongoDB connection config
require("./config/mongoDbConnConfig");

const init = () => {
    try {
        const port = process.env.PORT || 3000;
        const app = serverInit();
        http.createServer(app).listen(port);
        console.log(`Server is up and running on the ${port}`);
    } catch (error) {
        console.log("Error", error)
    }
};

init();
