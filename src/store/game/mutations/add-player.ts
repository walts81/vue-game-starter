import { Player } from '../models';
import { GameState } from '../state';

export default (state: GameState, payload: Player) => {
  const players = [...state.players];
  players.push(payload);
  state.players = players;
};
