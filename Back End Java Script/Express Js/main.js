const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World2!')
})
app.get('/about', (req, res) => {
  res.send('About!')
})


app.get('/contact', (req, res) => {
  res.send('Contact us on')
})
app.get('/blog', (req, res) => {
  res.send('Blog')
})
// app.get('/blog/introToJs', (req, res) => {
//   res.send('Blog intro to js')
// })
app.get('/blog/:slug', (req, res) => {
  res.send(`hello ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

