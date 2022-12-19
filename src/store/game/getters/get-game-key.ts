import { GameState } from '../state';

export default (state: GameState): string => {
  return state.gameKey;
};
