const mongoose = require("mongoose");
const FilmModel = require("./filmModel");

// Create
exports.addMovie = async (newFilm) => {
    try {
        let movie = new FilmModel(newFilm);
        await movie.save();
        console.log("Movie created.");
    } catch (error) {
        console.log(error);
    }
    
    mongoose.connection.close();
};

// Read
exports.list = async () => {
    try {
        console.log(await FilmModel.find({}));
    } catch (error) {
        console.log(error);
    }

    mongoose.connection.close();
};

// Update
exports.update = async () => {
    try {
        await FilmModel.updateOne({ name: "Clean", actor: "sdsd" });
        console.log("Successfully updated!");
    } catch (error) {
        console.log(error);
    }
    
    mongoose.connection.close();
};

// Delete 

exports.deleteX = async () => {
    try {
        await FilmModel.deleteOne({ name: "Clean" });
        console.log("Successfully deleted.");
    } catch (error) {
        console.log(error)
    }

    mongoose.connection.close();
};

// Delete related ones
exports.deleteY = async () => {
    try {
        await FilmModel.deleteMany({ actor: "Actor not found." });
        console.log("Successfully all related deleted.");
    } catch (error) {
        console.log(error)
    }

    mongoose.connection.close();
};