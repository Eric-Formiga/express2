const express = require('express');
const app = express();

const port = 3000
const path = require('path')
const basePath = path.join(__dirname, 'templates')

const checkAuth = function(req, res, next) {

  req.authStatus = true

  if(req.authStatus){
    console.log("Está logado, faça o login para continuar")
    next()
  }else{
    console.log("não esta logado.")
    next()
  }
}

app.use(checkAuth)

app.get('/', (req, res) => {
  res.send("Olá mundo!")

})

app.get('/html', (req, res) => {
  res.sendFile(`${basePath}/index.html`)

})

app.listen(port, ()=>{
  console.log(`Servidor rodando na porta ${port}`)
})