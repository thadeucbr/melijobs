import mongoose from 'mongoose';

const { Schema } = mongoose;

const megasenaSchema = new Schema({
  acumulado: Boolean,
  dataApuracao: String,
  dataProximoConcurso: String,
  dezenasSorteadasOrdemSorteio: [String],
  exibirDetalhamentoPorCidade: Boolean,
  indicadorConcursoEspecial: Number,
  listaDezenas: [String],
  listaDezenasSegundoSorteio: String,
  listaMunicipioUFGanhadores: [String],
  listaRateioPremio: {
    descricaoFaixa: String,
    faixa: Number,
    numeroDeGanhadores: Number,
    valorPremio: Number,
  },
  listaResultadoEquipeEsportiva: String,
  localSorteio: String,
  nomeMunicipioUFSorteio: String,
  nomeTimeCoracaoMesSorte: String,
  numero: Number,
  numeroConcursoAnterior: Number,
  numeroConcursoFinal_0_5: Number,
  numeroConcursoProximo: Number,
  numeroJogo: Number,
  observacao: String,
  premiacaoContingencia: String,
  tipoJogo: String,
  tipoPublicacao: String,
  ultimoConcurso: Boolean,
  valorArrecadado: Number,
  valorAcumuladoConcurso_0_5: Number,
  valorAcumuladoConcursoEspecial: Number,
  valorAcumuladoProximoConcurso: Number,
  valorEstimadoProximoConcurso: Number,
  valorSaldoReservaGarantidora: Number,
  valorTotalPremioFaixaUm: Number,
})

export default megasenaSchema;