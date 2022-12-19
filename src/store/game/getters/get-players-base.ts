import { mapPlayers } from '@/store/helpers';
import { Player } from '../models/player';
import { GameState } from '../state';

export default (state: GameState, filter?: (x: Player[]) => Player[]) => {
  let players = mapPlayers(state.players);
  players.sort((a, b) => {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });
  if (!!filter) {
    players = filter(players);
  }
  return players;
};
