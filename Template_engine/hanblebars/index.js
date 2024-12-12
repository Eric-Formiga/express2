const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs =  exphbs.create({
  partialsDir: ['views/partials'],
})

// Configurando o Handlebars como template engine
app.engine('handlebars', hbs.engine); // Registro do mecanismo de template
app.set('view engine', 'handlebars'); // Definindo o view engine como Handlebars

app.get('/blog', (req, res) => {

  const posts = [
    {
      title: "um titulo",
      category: "a",
      age: 2025
    },
    {
      title: "outro titulo",
      category: "b",
      age: 2024
    },
    {
      title: "novo titulo",
      category: "c",
      age: 2023
    }
  ]
  res.render('blog', {posts}); // Renderiza o template `home.handlebars`
});

app.get('/dashboard', (req, res) => {
  const items = ["a", "b", "c", "d", "e", "f"]

  const user = {
    name: "joão",
    sobrenome: "silva"
  }

  const post ={
    title: "um titulo",
    category: "a",
    age: 2025
  }
  res.render('dashboard', {user : user, items, post}); // Renderiza o template `home.handlebars`
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
