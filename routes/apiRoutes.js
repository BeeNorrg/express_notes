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
    //gets new note from notes and gives it an id, then adds it to 
    app.post("/api/notes/", function (req, res) {
        //gets note from body
        let newNote = req.body;
        //generates an id from the new note
        newNoteID = currentID + 1;
        //gives the new note an id
        newNote['id'] = newNoteID;
        //sets currentID to the previous ID
        currentID = newNoteID;
        //pushes new note to the database
        noteStorage.push(newNote);
        //writes database to noteStorage
        fs.writeFile("../db/db.json", JSON.stringify(noteStorage), (err) => {
            if (err) {
                console.log(error);
            }
            console.log("success! new note saved!");
        })
    });
};

