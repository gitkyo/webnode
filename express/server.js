
import path from "path";

import serverless from 'serverless-http'
import bodyParser from 'body-parser'
// const bodyParser = require('body-parser');
// const serverless = require('serverless-http');





import express from "express";
import hbs from "hbs";

// exemple d'import via requiere
// const express = require('express')

// exemple de console colore avec chalk
// console.log(chalk.inverse.green('Starting app in dev mode...')); // eslint-disable-line no-console
// console.log(chalk.inverse.red('Stopping app in dev mode...'));      
//set var to get path directory


// const __filename = fileURLToPath( import.meta.url );
// const __dirname = dirname( __filename );
const __dirname = path.resolve();
const publishDirectoryPath = path.join( __dirname, "/public" ); 
const viewsPath = path.join( __dirname, "/templates/views" );
const partialsPath = path.join( __dirname, "templates/partials" );


export const app = express();
export const handler = serverless(app)

// export conast handler function serverless(app);

const router = express.Router()


app.set( "view engine", "hbs" );
app.set( "views", viewsPath );
hbs.registerPartials( partialsPath );
app.use( express.static( publishDirectoryPath ) );


app.get('/', (req, res) => {
  	res.render( "index", {
		title: "Run node App",
	} );
  });

  
app.get( "/about", function ( req, res ) {
	res.render( "about" );
} );
// app.use('/about', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

//   router.get('/another', (req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<h1>Hello another Express.js!</h1>');
//     res.end();
//   });

// router.get('/another', (req, res) => res.json({ route: req.originalUrl }));

router.post('/', (req, res) => res.json({ postBody: req.body }));

// router.post('/another', (req, res) => res.json({ postBody: req.body }));

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

//404 page - A mettre a la fin des app.get !
app.get('*',(req, res) => {
    res.send(`
        My 404 page
        <br/>
        <a href="/">Come back home</a>`
    )
})

// app.get( "/", function ( req, res ) {
// 	res.render( "index", {
// 		title: "Run node App",
// 	} );
// } );

// router.post('/about', (req, res) => res.json({ postBody: req.body }));


