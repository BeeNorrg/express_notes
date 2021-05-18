// included path package to properly path our HTML
const path = require('path');

htmlRoute = function (app) {
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}

module.exports = htmlRoute;
