const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Configurando o Handlebars como template engine
app.engine('handlebars', exphbs.engine()); // Registro do mecanismo de template
app.set('view engine', 'handlebars'); // Definindo o view engine como Handlebars


app.get('/dashboard', (req, res) => {
  const user = {
    name: "joão",
    sobrenome: "silva"
  }
  res.render('dashboard', {user : user}); // Renderiza o template `home.handlebars`
});
// Rota principal
app.get('/', (req, res) => {
  const user = {
    name: "joão",
    sobrenome: "silva"
  }

  const palavra = "teste"
  
  const auth = true
  res.render('home', {user : user, palavra, auth}); // Renderiza o template `home.handlebars`
});

// Iniciando o servidor
app.listen(3000, () => {
  console.log('App funcionando na porta 3000!');
});
