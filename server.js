// server.js - Theater Reservation API

var express = require('express');
const app = express();

// Example stub:
app.get('/', function (req, res) {
  res.send('hello')
});

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Reserving seats on port ${port}!`);
})
