//filename : index.js

// import express
let express = require('express');

// initialize app
let app = express();

// setup server port
var port = process.env.PORT || 8080;

// send message for default URL
app.get('/', (req, res) => res.send('Hellow World with express'));

// Launch app to listen specified PORT
app.listen(port, function () {
  console.log("running resthub on port " + port);
})