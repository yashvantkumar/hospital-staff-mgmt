const getPermission = async (req, res) => {
    try {
        res.status(200).send({
            message: "hello"
        })
    } catch (error) {
        res.status(200).send({
            message: "error"
        })
    }
};

const createPermission = async (req, res) => {
    try {
        res.status(200).send({
            message: "hello"
        })
    } catch (error) {
        res.status(200).send({
            message: "error"
        })
    }
};

module.exports = {
    getPermission,
    createPermission,
};
