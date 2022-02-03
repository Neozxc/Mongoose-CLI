require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const { addMovie, list, update, deleteX, deleteY } = require("./film/filmMethods");

const app = async () => {
    if (argv.add) {
        await addMovie({ name: argv.title, actor: argv.actor });
    } else if (argv.list) {
        list();
    } else if (argv.update) {
        update();
    } else if (argv.delete) {
        deleteX();
    } else if (argv.deleteY){
        deleteY();
    }
};

app();