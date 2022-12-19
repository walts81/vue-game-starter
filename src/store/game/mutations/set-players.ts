import { Player } from '../models';
import { GameState } from '../state';

export default (state: GameState, payload: Player[]) => {
  state.players = payload;
};
