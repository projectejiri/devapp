const express = require('express');
const app = express();
app.use("view engine", "ejs");

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.listen(3000, function() {
  console.log('Service started on port 3000....')
});
