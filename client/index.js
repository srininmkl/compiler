const express = require('express'),
  
  app = express();
var port = 8086;


// mentioned to look for static files in these directories
app.use(express.static('./build/'));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// serving the UI to the user
app.get("*", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

// catching unhandles exception to stop app from crashing
process.on('uncaughtException', (err) => {
  
});

// start the server on port
app.listen(port, () => {
  console.log('Institutional Onboarding server is running on port: ', port);
});

