import Game from './GenericGame';

export default async function updateGames() {
  (new Game('MEGA_SENA', 'megasena')).getNewGame();
  (new Game('LOTOFACIL', 'lotofacil')).getNewGame();
  (new Game('QUINA', 'quina')).getNewGame();
  (new Game('LOTOMANIA', 'lotomania')).getNewGame();
  (new Game('TIMEMANIA', 'timemania')).getNewGame();
  (new Game('DUPLA_SENA', 'duplasena')).getNewGame();
  (new Game('LOTERIA_FEDERAL', 'federal')).getNewGame();
  (new Game('LOTECA', 'loteca')).getNewGame();
  (new Game('DIA_DE_SORTE', 'diadesorte')).getNewGame();
  (new Game('SUPER_SETE', 'supersete')).getNewGame();
  (new Game('MAIS_MILIONARIA', 'maismilionaria')).getNewGame();
}