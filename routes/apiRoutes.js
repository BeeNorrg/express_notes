//include path and fs to be able to path to our html and write to files
const path = require("path");
const fs = require("fs");
//require uuidv4 to generate random id's
const { v4: uuidv4 } = require('uuid');
//require db to get notes
let noteStorage = require("../db/db.json");
//require express to parse data
const express = require("express");
const { resolveSoa } = require("dns");

module.exports = function noteTaker(app) {
    app.get("/api/notes", function (req, res) {
        res.json(noteStorage);
        });
    //gets new note from notes and gives it an id, then adds it to 
    app.post("/api/notes/", function (req, res) {
        //ready a new ID for the new note
        newNote = req.body;
        //use uuidv4 to generate random id 
        newNote["id"] = uuidv4();
        console.log('newNote:', newNote);
        noteStorage.push(newNote);
            
        //writes database to noteStorage
        fs.writeFile("./db/db.json", JSON.stringify(noteStorage), (err) => {
            if (err) {
                console.error(err);
            }
            console.log("success!");
        });
        res.send();
    });
    //deletes note 
    app.delete('/api/notes/:id', function (req, res) {
        let deleteID = req.params.id;
        let postDelete = noteStorage.filter(note => note.id !== deleteID);
        //writes database to noteStorage
        fs.writeFile("./db/db.json", JSON.stringify(postDelete), (err) => {
            if (err) {
                console.error(err);
            }
            console.log("success!");
        });
        noteStorage = postDelete;
        res.json(postDelete);
    })
};
  

