const mongoose = require("mongoose");
require("dotenv").config();

const con = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected")
    } catch (error) {
        console.log("mongodb not connected");
    }
}

module.exports = con