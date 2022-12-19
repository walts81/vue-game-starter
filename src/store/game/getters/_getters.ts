import { getterTypes } from './_types';
import getMyPlayer from './get-my-player';
import getMyPlayerKey from './get-my-player-key';
import getGameKey from './get-game-key';
import getGames from './get-games';
import getOtherPlayers from './get-other-players';
import getPlayablePlayers from './get-playable-players';
import getPlayers from './get-players';

export const getters = {
  [getterTypes.myPlayer]: getMyPlayer,
  [getterTypes.myPlayerKey]: getMyPlayerKey,
  [getterTypes.gameKey]: getGameKey,
  [getterTypes.games]: getGames,
  [getterTypes.otherPlayers]: getOtherPlayers,
  [getterTypes.playablePlayers]: getPlayablePlayers,
  [getterTypes.players]: getPlayers,
};
