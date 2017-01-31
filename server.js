const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const logger = require('morgan');

app.use(logger('dev'));


app.get('*', function (req, res) {
  res.sendFile(process.cwd() + '/index.html');
});

app.listen(PORT, function (req, res) {
  console.log('Listening on PORT: ' + PORT);
});
