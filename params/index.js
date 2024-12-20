const express = require('express');
const app = express();
const port = 3000
const path = require('path')
const basePath = path.join(__dirname, 'templates')
const users = require('./users')

app.use(express.urlencoded({
  extended:true,
}))

app.use(express.json())

app.use('/users', users)

app.get('/', (req, res) => {
  res.send(`${basePath}/index.html` )

})

app.use(function(req, res, next) {
  res.status(404).send(`${basePath}/404.html` )
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
