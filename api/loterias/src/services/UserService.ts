import mongoose from 'mongoose';
import GameSchema from '../database/schemas/GameSchema';
import UserSchema from '../database/schemas/UserSchema';
import { EGamePrice } from '../types/TGame';
import { TUser, TUserGame } from '../types/TUser';

export default class UserService {
  private _dbUser = mongoose.model('user', UserSchema);

  private async verifyUserExistence(user: TUser): Promise<void> {
    const { whatsapp, email } = user;
    const userExist = await this._dbUser.findOne({ $or: [{ whatsapp }, { email }] }).exec();
    if (userExist) throw new Error('Usuário já cadastrado.');
  }

  public async createUser(user: TUser) {
    try {
      await this.verifyUserExistence(user);
      await this._dbUser.create(user);
    } catch (error) {
      return error;
    }
  }

  public async findUser(user: TUser) {
    const { email, password } = user;
    return await this._dbUser.findOne({ email, password }).exec();
  }

  public async registerGame(game: TUserGame) {
    const totalGamePrice = game.games.map(({ tipoJogo }) => EGamePrice[tipoJogo]);
    const totalWasted = totalGamePrice.reduce((acc, price) => acc + price, 0);
    await this._dbUser.findOneAndUpdate(
      { email: game.email },
      { $addToSet: { games: game.games }, $inc: { totalGasto: totalWasted } }
    ).exec();
  }
}
