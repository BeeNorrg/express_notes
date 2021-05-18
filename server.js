//require express
const express = require('express');

var app = express();
//sets port to 8081
var PORT = process.env.PORT || 8081;

app.use(express.urlencoded({ extended : true }));
app.use(express.json());
//links express to public folder for assets
app.use(express.static('./public'));

//aapi route
require('./routes/apiRoutes')(app);
//html route
require('./routes/htmlRoutes')(app);
//runs server
app.listen(PORT, () => console.log('Listening on PORT: ' + PORT));