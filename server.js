
// Dependencies
var express = require('express');

// Express
var app = express();

// Start server
app.listen(3000);
console.log('API is running on port 3000');

  app.route('/api')
    .get(function(req, res, next) {
        res.send('respond with a resource');
    })

  app.route('/aedl')
    .get(function(req, res, next) {
      res.send('Here will be list of aeds - Jurgita test 2');
    })    
    
  app.get('/status', function(req, res, next) {
    res.json({ running: true });
  });


