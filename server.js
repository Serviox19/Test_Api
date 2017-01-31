const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const logger = require('morgan');

app.use(logger('dev'));
app.use(express.static("public"));
app.use("/public", express.static(__dirname + "/public"));


const apiRouter = require('./router/apiRouter');
app.use('/api', apiRouter);

app.get('*', function (req, res) {
  res.sendFile(process.cwd() + '/index.html');
});

app.listen(PORT, function (req, res) {
  console.log('Listening on PORT: ' + PORT);
});
