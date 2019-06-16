//filename : index.js

// import express
let express = require('express');

//import routes
let apiRoutes = require('./api-routes');

// initialize app
let app = express();

// setup server port
var port = process.env.PORT || 8080;

// send message for default URL
app.get('/', (req, res) => res.send('Hellow World with express'));

// app apiRoutes
app.use('/api', apiRoutes);

// Launch app to listen specified PORT
app.listen(port, function () {
  console.log("running resthub on port " + port);
})