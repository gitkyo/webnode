import {app} from './express/server.js';
import chalk from "chalk";

app.listen( 3000 );
console.log( chalk.inverse.green( "Starting serveur on port 3000..." ) ); // eslint-disable-line no-console