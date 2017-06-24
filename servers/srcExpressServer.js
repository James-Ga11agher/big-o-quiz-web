import express from 'express';
import path from 'path';

/* eslint-disable no-console */

let app = express();
let port = 3000;

app.get('/', function(req, res) {
  res.sendFile(path.join( __dirname, '../dist/index.html'));
});

app.get('/bundle.js', function(req, res) {
  res.sendFile(path.join( __dirname, '../dist/bundle.js'));
});

app.listen(port, function(err) {
  console.log('listening on port: ' + port);
});
