import axios from 'axios';
import moment from 'moment';
import mongoose from 'mongoose';
import GameSchema from '../database/schemas/GameSchema';
import { TGame, TGameName, TURL } from '../types/TGame';

moment.suppressDeprecationWarnings = true;

export default class Game {
  private _model = mongoose.model('game', GameSchema);

  constructor(private readonly _game: TGameName, private readonly _url: TURL) {}

  public async saveGame(): Promise<void> {
    const response = await axios.get(
      `https://servicebus2.caixa.gov.br/portaldeloterias/api/${this._url}/`
    );
    const lastGame = this.lastGame();
    if ((await lastGame)?.dataApuracao === response.data.dataApuracao) return;
    console.log(`Salvando ${this._game}`);
    await this._model.create(response.data);
  }

  public async lastGame(): Promise<TGame> {
    const lastGame = await this._model
      .findOne({ tipoJogo: this._game })
      .sort({ dataApuracao: 'desc' })
      .exec();
    return lastGame as unknown as TGame;
  }

  public async allGames(): Promise<TGame[]> {
    const games = await this._model.find({ tipoJogo: this._game }).exec();
    return games as unknown as TGame[];
  }

  public async getNewGame(): Promise<void> {
    const lastGame = (await this.lastGame())?.dataProximoConcurso;
    if (lastGame === undefined) return this.saveGame();
    const dateToCompare = moment(lastGame).format('DD/MM/YYYY');
    const oldGame = moment().isAfter(dateToCompare);
    if (oldGame) this.saveGame();
  }
}
