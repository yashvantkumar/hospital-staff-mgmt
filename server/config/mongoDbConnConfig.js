const mongoose = require('mongoose');

//Establishing the connection to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB successfully");
    })
    .catch((error) => {
        console.log("Unable to connect with MongoDB", error);
    });
