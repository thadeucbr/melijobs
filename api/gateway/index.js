const express = require('express');
const cors = require('cors');

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.status(200).send(`<h1>Gateway barbudo de pé</h1>`))

app.listen(7777, () => console.log('Gateway barbudo rodando na porta 7777'))