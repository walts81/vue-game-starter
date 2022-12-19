import { mutationTypes } from './_types';
import setPlayers from './set-players';
import addPlayer from './add-player';
import setMyplayerKey from './set-my-player-key';
import setGameName from './set-game-name';
import setGames from './set-games';

export const mutations = {
  [mutationTypes.setPlayers]: setPlayers,
  [mutationTypes.addPlayer]: addPlayer,
  [mutationTypes.setMyplayerKey]: setMyplayerKey,
  [mutationTypes.setGameName]: setGameName,
  [mutationTypes.setGames]: setGames,
};
