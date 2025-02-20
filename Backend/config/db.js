const mongoose = require("mongoose");
require("dotenv").config();

const connection = async () => {
    try {
        await mongoose.connect(process.env.mongo_url);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
};

module.exports = connection;
