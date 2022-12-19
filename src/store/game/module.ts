import { actions } from './actions/_actions';
import { getters } from './getters/_getters';
import { mutations } from './mutations/_mutations';
import { getDefaultGameState } from './state';

export const rootGame = {
  state: getDefaultGameState(),
  actions,
  getters,
  mutations,
};
