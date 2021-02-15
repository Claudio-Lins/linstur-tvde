const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


require('./models/odometro')
const Odometro = mongoose.model('Odometro')

const app  = express()

app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type, Authorization');
  app.use(cors());
  next();
})

mongoose.connect('mongodb+srv://clins:linstur-db@cluster0.zwsrt.mongodb.net/linstur', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexão com MongoDB realizada com sucesso')
}).catch((erro) => {
  console.log('Error: Conexão com MongoDB não realizada ' + erro)
})

app.get('/resume', (req, res) => {
  Odometro.findOne({}).then((home) => {
    return res.json(home)
  }).catch((err) =>{
    return res.status(400).json({
        error: false,
        mensage: 'Nenhum registro inserido!'
      })
  } )
  
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