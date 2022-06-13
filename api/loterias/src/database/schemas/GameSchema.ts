import mongoose from 'mongoose';

const { Schema } = mongoose;

const GameSchema = new Schema({
  dataApuracao: String,
  dataProximoConcurso: String,
  dezenasSorteadasOrdemSorteio: [String],
  listaDezenas: [String],
  listaDezenasSegundoSorteio: undefined || [String],
  trevosSorteados: [String] || undefined,
  listaRateioPremio: [
    {
      descricaoFaixa: String,
      faixa: Number,
      numeroDeGanhadores: Number,
      valorPremio: Number,
    },
  ],
  numero: Number,
  numeroConcursoAnterior: Number,
  numeroConcursoFinal_0_5: Number,
  numeroConcursoProximo: Number,
  numeroJogo: Number,
  premiacaoContingencia: undefined || Number || String,
  tipoJogo: String,
  valorArrecadado: Number,
  valorAcumuladoConcurso_0_5: Number,
  valorAcumuladoConcursoEspecial: Number,
  valorAcumuladoProximoConcurso: Number,
  valorEstimadoProximoConcurso: Number,
  valorSaldoReservaGarantidora: Number,
  valorTotalPremioFaixaUm: Number,
});

export default GameSchema;
