// Require the 'express' package
var express = require( 'express' );

// Require the 'body-parser' package
var bodyParser = require( 'body-parser' );

// Instantiate express
var app = express();

// Define the default tasks
var tasks = [ 'Create Node.js App', 'Eat Dinner' ];

// Use 'ejs' as the template engine
app.set( 'view engine', 'ejs' );

// Redirect unrouted responses to the 'views' folder
app.use( express.static( 'views' ) );

// Use the body-parser package in conjunction with express
app.use( bodyParser.urlencoded( { extended: true } ) );

// Respond to any requests from the browsers..
app.all( '/', function( req, res ){
	
	// If the form was submitted..
	if( req.body.tasks ) {

		// ..use tasks from the form
		tasks = req.body.tasks.filter( function( val ) { return val; } );

	}
	
	// Create an empty task
	tasks.push( '' );
	
	// Render 'index.ejs' using the up-to-date task list
	res.render( 'index', {
		tasks: tasks
	} );
	
});

// Start listening for requests on port 1337
app.listen( 1337 );
