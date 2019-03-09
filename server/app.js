const express = require('express');
const path = require('path');
const app = express();

const BUILD_PATH = './../build';

app.use(express.static(path.join(__dirname, BUILD_PATH)));

app.get('/*', function(req, res) {
  const buildPath = path.join(__dirname, BUILD_PATH, 'index.html');
  res.sendFile(buildPath);
});

app.listen(9000);
