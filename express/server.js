import { fileURLToPath } from "url"
import { dirname } from "path"
import path from "path";





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


app.set( "view engine", "hbs" );
app.set( "views", viewsPath );
hbs.registerPartials( partialsPath );
app.use( express.static( publishDirectoryPath ) );


app.get( "/", function ( req, res ) {
	res.render( "index", {
		title: "Run node App",
	} );
} );

app.get( "/about", function ( req, res ) {
	res.render( "about" );
} );