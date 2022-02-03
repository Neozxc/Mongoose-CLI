require("dotenv").config();

const mongoose = require("mongoose");

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log("Successful connection to the database.");
    } catch (error) {
        console.log(error);
    }
}

connection();
