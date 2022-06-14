const mongoose = require('mongoose');

const url = 'mongodb://mongo:27017/vagas'

const mongoConnection = () => mongoose.connect(url).catch(err => console.log(err.message));

module.exports = mongoConnection;