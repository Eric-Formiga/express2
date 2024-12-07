const express = require('express');
const router = express.Router()
const port = 3000
const path = require('path')
const basePath = path.join(__dirname, '../templates')

router.use(express.urlencoded({
  extended:true,
}))

router.use(express.json())

//arquivos estáticos
appendFile.use(express.static('public'))


router.get('/add', (req, res) => {

  res.sendFile(`${basePath}/userform.html`)

})

router.post('/save', (req, res) => {
  const name = req.body.name
  const age = req.body.age
  console.log(`${name} ${age}`)

  res.sendFile(`${basePath}/userform.html`)
})
router.post('/:id', (req, res) => {
  const id = req.params.id
 
  console.log(`Estamos buscando ${id}`)

  res.sendFile(`${basePath}/users.html`)
})

module.exports = router