// Require the 'express' package
var express = require( 'express' );

// Instantiate express
var app = express();

// Use 'ejs' as the template engine
app.set( 'view engine', 'ejs' );

// Point unrouted requests to the 'views' directory
app.use( express.static( 'views' ) );

// Respond to any requests from the browsers..
app.all( '/', function( req, res ){
	
	// Render index.ejs using a predefined list of tasks
	res.render( 'index', {
		tasks: [ 'Create Node.js App', 'Eat Dinner', '' ]
	} );
	
});

// Start listening for requests on port 1337
app.listen( 1337 );
