//include path and fs to be able to path to our html and write to files
const path = require("path");
const fs = require("fs");
//require db to get notes
const noteStorage = require("../db/db.json");

let currentID = 0;

let apiObj = {
    getNotes: getNotes(),
    writeNotes: writeNotes(),
};

function getNotes() {
    app.get("/api/notes", function (req, res) {
        res.json(noteStorage);
    });
};

function writeNotes() {
    app.post("/api/notes/", function (req, res) {});
};

