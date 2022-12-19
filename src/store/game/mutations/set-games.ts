import { GameState } from '../state';

export default (state: GameState, payload: string[]) => {
  state.games = payload;
};
