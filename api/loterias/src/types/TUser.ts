import { TGameName } from './TGame';

export type TUser = {
  email: string;
  whatsapp: string;
  password: string;
}

export type TUserGame = TUser & {
  totalGasto: number;
  games: [
    {
      tipoJogo: TGameName,
      listaDezenas: string[],
      listaDezenasSegundoSorteio?: string[];
      trevosSorteados?: string[];
      numero: number
    }
  ]
}