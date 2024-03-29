export type TGameName =
  | 'MEGA_SENA'
  | 'LOTOFACIL'
  | 'QUINA'
  | 'LOTOMANIA'
  | 'TIMEMANIA'
  | 'DUPLA_SENA'
  | 'LOTERIA_FEDERAL'
  | 'LOTECA'
  | 'DIA_DE_SORTE'
  | 'SUPER_SETE'
  | 'MAIS_MILIONARIA';

export type TURL =
  | 'megasena'
  | 'lotofacil'
  | 'quina'
  | 'lotomania'
  | 'timemania'
  | 'duplasena'
  | 'federal'
  | 'loteca'
  | 'diadesorte'
  | 'supersete'
  | 'maismilionaria';

export type TGame = {
  acumulado: boolean;
  dataApuracao: string;
  dataProximoConcurso: string;
  dezenasSorteadasOrdemSorteio: string[];
  exibirDetalhamentoPorCidade: boolean;
  id: null;
  indicadorConcursoEspecial: number;
  listaDezenas: string[];
  listaDezenasSegundoSorteio: null;
  listaMunicipioUFGanhadores: string[];
  listaRateioPremio: {
    descricaoFaixa: string;
    faixa: number;
    numeroDeGanhadores: number;
    valorPremio: number;
  }[];
  listaResultadoEquipeEsportiva: null;
  localSorteio: string;
  nomeMunicipioUFSorteio: string;
  nomeTimeCoracaoMesSorte: string;
  numero: number;
  numeroConcursoAnterior: number;
  numeroConcursoFinal_0_5: number;
  numeroConcursoProximo: number;
  numeroJogo: number;
  observacao: string;
  premiacaoContingencia: null;
  tipoJogo: string;
  tipoPublicacao: number;
  ultimoConcurso: boolean;
  valorArrecadado: number;
  valorAcumuladoConcurso_0_5: number;
  valorAcumuladoConcursoEspecial: number;
  valorAcumuladoProximoConcurso: number;
  valorEstimadoProximoConcurso: number;
  valorSaldoReservaGarantidora: number;
  valorTotalPremioFaixaUm: number;
};

export enum EGamePrice {
  'MEGA_SENA' = 4.50,
  'LOTOFACIL' = 2,
  'QUINA' = 2,
  'LOTOMANIA' = 2.50,
  'TIMEMANIA' = 3,
  'DUPLA_SENA' = 2.50,
  'LOTERIA_FEDERAL' = 4.50,
  'LOTECA' = 3,
  'DIA_DE_SORTE' = 2,
  'SUPER_SETE' = 2.50,
  'MAIS_MILIONARIA'= 6
}