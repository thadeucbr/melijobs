import { Schema } from 'mongoose';

const UserSchema = new Schema({
  email: String,
  whatsapp: String,
  password: String,
  totalGasto: Number,
  games: [
    {
      tipoJogo: String(
        'MEGA_SENA' ||
          'LOTOFACIL' ||
          'QUINA' ||
          'LOTOMANIA' ||
          'TIMEMANIA' ||
          'DUPLA_SENA' ||
          'LOTERIA_FEDERAL' ||
          'LOTECA' ||
          'DIA_DE_SORTE' ||
          'SUPER_SETE' ||
          'MAIS_MILIONARIA'
      ),
      listaDezenas: [String],
      listaDezenasSegundoSorteio: undefined || [String],
      trevosSorteados: [String] || undefined,
      numero: Number
    },
  ],
});

export default UserSchema;