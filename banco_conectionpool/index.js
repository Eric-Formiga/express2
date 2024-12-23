const express = require('express');
const exphbs = require('express-handlebars');
const pool  = require('./db/conn')
const app = express();



// Configurando o Handlebars como template engine
app.engine('handlebars', exphbs.engine()); // Registro do mecanismo de template
app.set('view engine', 'handlebars'); // Definindo o view engine como Handlebars

app.use(express.static('public'))

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())
// Rota principal
app.get('/', (req, res) => {
  res.render('home'); // Renderiza o template `home.handlebars`
});

app.post('/books/insertbook', (req, res) => {
  const title = req.body.title
  const pageqty = req.body.pageqty

  const sql = `INSERT INTO books (title, pageqty) VALUES('${title}', '${pageqty}')`

  pool.query(sql, function (err) {
    if (err) {
      console.log(err)
    }
    res.redirect('/')
  })
})

app.get('/books', (req, res) => {
  const sql = `SELECT * FROM books`

  pool.query(sql, function (err, data) {
    if (err) {
      console.log(err)
      return
    }
    const books = data
    res.render('books', { books})
  })
});

app.get('/books/:id', (req, res) => {

  const id = req.params.id
  const sql = `SELECT * FROM books WHERE id = '${id}'`

  pool.query(sql, function (err, data) {
    if (err) {
      console.log(err)
      return
    }
    const book = data[0]
    res.render('book', {book})
  })
});

app.get('/books/edit/:id', (req, res) => {

  const id = req.params.id
  const sql = `SELECT * FROM books WHERE id = '${id}'`

  pool.query(sql, function (err, data) {
    if (err) {
      console.log(err)
      return
    }
    const book = data[0]
    res.render('editbook', {book})
  })
});

app.post('/books/updateboook', (req, res) => {

  const id = req.body.id
  const title = req.body.title
  const pageqty = req.body.pageqty
  const sql = `UPDATE books SET title = '${title}', pageqty = '${pageqty}' WHERE id = '${id}'`

  pool.query(sql, function (err, data) {
    if (err) {
      console.log(err)
      return
    }
    res.redirect('/books')
  })
});

app.post('/books/remove/:id', (req, res) => {

  const id = req.params.id

  const sql = `DELETE FROM books WHERE id = '${id}'`

  pool.query(sql, function (err, data) {
    if (err) {
      console.log(err)
      return
    }
    res.redirect('/books')
  })
});



app.listen(3000)