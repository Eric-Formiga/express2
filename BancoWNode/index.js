const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const app = express();



// Configurando o Handlebars como template engine
app.engine('handlebars', exphbs.engine()); // Registro do mecanismo de template
app.set('view engine', 'handlebars'); // Definindo o view engine como Handlebars

app.use(express.static('public'))

// Rota principal
app.get('/', (req, res) => {
  res.render('home'); // Renderiza o template `home.handlebars`
});

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database:'nodemysql2',
})

conn.connect(function(err){
  if(err){
    console.log(err)
  }

  console.log("conectou com o mysql")

  app.listen(3000)
})