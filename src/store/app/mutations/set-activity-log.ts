import { AppState } from '../state';

export default (state: AppState, payload: any[]) => {
  state.activityLog = payload;
};
