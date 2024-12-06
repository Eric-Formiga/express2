const express = require('express');
const app = express();

const port = 3000
const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.get('/users/:id', (req, res) => {
  const id = req.params.id
  console.log(id)
  res.sendFile(`${basePath}/index.html`)

})


app.get('/', (req, res) => {
  res.send("Olá mundo!")

})



app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})