const mongoose = require('mongoose');
const vagaSchema = require('../database/schemas/vagas');

const vagaModel = mongoose.model('vaga', vagaSchema);

module.exports = vagaModel;