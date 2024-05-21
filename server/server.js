const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3001;

app.get( '/', ( req, res ) =>
{
  res.send( 'Hello, welcome to the stagger server!' );
} );

app.get( '/image', ( req, res ) =>
{
  const filePath = path.join( __dirname, './database/data.json' );
  fs.readFile( filePath, 'utf8', ( err, data ) =>
  {
    if ( err )
    {
      res.status( 500 ).send( 'Error reading data file' );
      return;
    }
    res.setHeader( 'Content-Type', 'application/json' );
    res.send( data );
  } );
} );

app.listen( port, () =>
{
  console.log( `Server is running at http://localhost:${port}` );
  console.log( `Server is responding with data at http://localhost:${port}/image` );
} );