import { AppState, getDefaultAppState } from './app/state';
import { GameState, getDefaultGameState } from './game/state';

export interface RootState {
  rootApp: AppState;
  rootGame: GameState;
}

export const getDefaultRootState = (): RootState => ({
  rootApp: getDefaultAppState(),
  rootGame: getDefaultGameState(),
});
