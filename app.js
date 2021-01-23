require("dotenv").config()
const express = require('express')
const homepageRoutes = require('./routes/homepage-routes');

const app = express()

const port = 5005


app.use('/news',homepageRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})