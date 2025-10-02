const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
// app.use(express.static('public'));
const blog = require('./router/blog')

// ...

app.use('/blog', blog)


app.use((req, res, next) => {
    req.aarav = 'Hello Aarav'
    fs.appendFileSync("log.txt", ` ${Date.now()} is a ${req.method}\n`)
  console.log('m1')
  next()
})
app.use((req, res, next) => {
  console.log('m2')
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use((req, res, next) => {
  console.log('m1')
  next()
})


app.get('/about', (req, res) => {
  res.send('Hello about' + req.aarav)
})

app.get('/contact', (req, res) => {
  res.send('Hello contact' + req.aarav)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
