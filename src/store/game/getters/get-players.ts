import { configAccess } from '@/config';
import { GameState } from '../state';
import getPlayersBase from './get-players-base';

export default (state: GameState) =>
  getPlayersBase(state, configAccess.config.filterPlayers);
