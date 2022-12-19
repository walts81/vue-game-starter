import { mapPlayer } from '@/store/helpers';
import { getDefaultPlayer } from '../models/player';
import { GameState } from '../state';
import getPlayers from './get-players';

export default (state: GameState) => {
  const myPlayerKey = state.myPlayerKey;
  const players = getPlayers(state);
  const meArr = players.filter(x => x.key === myPlayerKey);
  const me =
    meArr.length > 0 ? meArr[0] : getDefaultPlayer('Player Not Selected');
  return mapPlayer(me);
};
