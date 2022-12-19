import { AppState } from '../state';

export default (state: AppState, payload: string) => {
  state.title = payload;
};
