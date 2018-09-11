// server.js - Theater Reservation API

var express = require('express');
const app = express();

// Example stub:
app.get('/',  (req, res) => {
  res.send('hello')
});


app.get('/theater', (req, res) => {
  res.send('all theatre names')
})

//get details of specific theater
app.get('/theater/:name', (req, res) => {
  res.json({'stub': `[${req.originalUrl}]`});
})


app.post('/theater/:name/reserve/', (req, res) => {
  res.redirect('/theater/' + req.params.name)
})

app.get('/checkout', (req, res) => {
  res.send('everything in your cart')
})

app.post('/checkout', (req, res) => {
  res.redirect('/')
})

app.delete('/checkout', (req, res) => {
  res.redirect('/')
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Reserving seats on port ${port}!`);
})
