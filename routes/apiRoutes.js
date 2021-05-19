//include path and fs to be able to path to our html and write to files
const path = require("path");
const fs = require("fs");
//require db to get notes
const noteStorage = require("../db/db.json");
//require express to parse data
const express = require("express");

let currentID = 0;

module.exports = function noteTaker(app) {
    app.get("/api/notes", function (req, res) {
        res.json(noteStorage);
        });
    //gets new note from notes and gives it an id, then adds it to 
    app.post("/api/notes/", function (req, res) {
        //ready a new ID for the new note
        let newID = currentID + 1;
        //reads db.json to get notes
        fs.readFile("../db/db.json", (err, data) => {
            //variable that parses db.json
            const fileRead = JSON.parse(data);
            newNote = req.body;
            newNote["id"] = newID;
            console.log('newNote:', newNote);
            
            

        })
        //writes database to noteStorage
        fs.writeFile("../db/db.json", JSON.stringify(noteStorage), (err) => {
            if (err) {
                console.log(error);
            }
            console.log("success! new note saved!");
        })
    });
    //deletes note 
    app.delete('/user', function (req, res) {
        res.send('Got a DELETE request at /user')
      })
    };
  

