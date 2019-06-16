// initialize express router
let router = require('express').Router();

// set default API response
router.get('/', function (req, res) {
  res.json({
    status: 'API its working',
    message: 'Welcome to RESThub crafted!'
  });
});

// exports API
module.exports = router;