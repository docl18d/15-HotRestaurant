// Dependancies set up

var express = require("express");
var bodyParser = require("body-parser");

// Express configuration and server port set up

var app = express();

var PORT = process.env.PORT || 3000;

// Express app set up to handle data parsing for middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//server route paths

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener to starts the server

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
