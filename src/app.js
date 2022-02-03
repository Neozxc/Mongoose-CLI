require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const { addMovie, list } = require("./film/filmMethods");

const app = async () => {
    if (argv.add) {
        await addMovie({ name: argv.title, actor: argv.actor });
    } else if (argv.list) {
        list();
    } else {
        console.log("Wrong command");
    }
};

app();