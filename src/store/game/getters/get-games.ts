import { GameState } from '../state';

export default (state: GameState) => {
  return [...state.games];
};
