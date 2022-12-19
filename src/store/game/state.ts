import { Player } from './models';

export interface GameState {
  gameKey: string;
  myPlayerKey: string;
  players: Player[];
  games: string[];
  activityLog: { title: string; text: string }[];
}

export const getDefaultGameState = (): GameState => ({
  gameKey: '',
  myPlayerKey: '',
  players: [],
  games: [],
  activityLog: [],
});
