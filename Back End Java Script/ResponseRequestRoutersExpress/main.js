const express = require('express')
const blog = require('./routers/blog')
const app = express()
const port = 3000
app.use(express.static("public"))
app.use('/blog', blog)
app.get('/', (req, res) => {
  console.log("this is a get requst")
  res.send('Hello World 2!')
})
app.post('/', (req, res) => {
  console.log("this is a post requst")
  res.send('Hello World post request2!')
})
app.get('/api', (req, res) => {
  
  res.json({ "name": "John", "age": 30, "city": "New York" })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
