// Require the 'express' package
var express = require( 'express' );

// Instantiate express
var app = express();

// Point requests to the 'views' directory
app.use( express.static( 'views' ) );

// Start listening for requests on port 1337
app.listen( 1337 );
