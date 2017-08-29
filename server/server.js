let express = require("express");
let bodyParser = require("body-parser");
let expressServer = express();
let port = 3001;

//whats the prupose of that object that we are passing in there?
expressServer.use(bodyParser.urlencoded({ extended : true }));
expressServer.use(bodyParser.json());
expressServer.use(express.static('ui'));

expressServer.listen(port);

console.log('character RESTful API server started on port: ' + port);