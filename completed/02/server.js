// Require the 'http' package
var http = require( 'http' );

// Instantiate the http Server
var server = http.Server();

// Respond to requests from browsers
server.on( 'request', function( request, response ) {
	
	// Response with a message
	response.write( 'Hello World!' );
	
	// Send the repsonse
	response.end();
	
} );

// Start listening on port 1337
server.listen( 1337 );