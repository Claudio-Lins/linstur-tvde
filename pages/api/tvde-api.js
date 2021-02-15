const express = require('express')
const mongoose = require('mongoose')
const app  = express()

require('./models/odometro')
const Odometro = mongoose.model('Odometro')

mongoose.connect('mongodb+srv://clins:linstur-db@cluster0.zwsrt.mongodb.net/linstur', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexão com MongoDB realizada com sucesso')
}).catch((erro) => {
  console.log('Error: Conexão com MongoDB não realizada ' + erro)
})

app.get('/resume', (req, res) => {
    return res.json({
        error: false,
        mensage: 'Info da página Resume!'
      })
})

app.post("/resume", (req, res) => {
    Odometro.create(req.body, (err) => {
      if(err) return res.status(400).json({
        error:true,
        mensage: 'Erro: Conteudo da página Resume não cadastrado com Sucesso!'
      })
    })
    return res.json({
      error: false,
      mensage: 'Conteudo da página Resume cadastrado com Sucesso!'
    })
  })
  

app.listen(8080, () => {
    console.log('Serividor iniciado com Sucesso na Porta 8080')
})