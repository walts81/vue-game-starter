import { actionTypes } from './_types';
import addPlayer from './add-player';
import clearGame from './clear-game';
import deleteGame from './delete-game';
import getGames from './get-games';
import joinGame from './join-game';
import resetGame from './reset-game';
import setMyPlayerKey from './set-my-player-key';
import unsetGame from './unset-game';
import updatePlayerInfo from './update-player-info';

export const actions = {
  [actionTypes.addPlayer]: addPlayer,
  [actionTypes.clearGame]: clearGame,
  [actionTypes.deleteGame]: deleteGame,
  [actionTypes.getGames]: getGames,
  [actionTypes.joinGame]: joinGame,
  [actionTypes.resetGame]: resetGame,
  [actionTypes.setMyPlayerKey]: setMyPlayerKey,
  [actionTypes.unsetGame]: unsetGame,
  [actionTypes.updatePlayerInfo]: updatePlayerInfo,
};
