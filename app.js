// app.js
const express = require('express')
const app = express()
const port = 3000

const moment = require('moment')

app.use(function (req, res, next) {
  console.log(`${moment().format("YYYY-MM-DD HH:mm:ss")} | ${req.method} from ${req.url}`)
  next();
});

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})



app.listen(port, () => {
  console.log(`App running on port ${port}`)
})