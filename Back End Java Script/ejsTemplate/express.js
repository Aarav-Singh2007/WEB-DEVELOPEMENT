const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let sitename = "Aarav Singh"
    let searchtext = "Search Now"
    let arr = [67,2,70]
  res.render("index", { sitename: sitename, searchtext: searchtext, arr: arr })
})
app.get('/blog/:slug', (req, res) => {
    let blogtitle = "Aarav Singh Title"
    let blogname = "Search blogname"
  res.render("blogpost", { blogtitle: blogtitle, blogname: blogname })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

