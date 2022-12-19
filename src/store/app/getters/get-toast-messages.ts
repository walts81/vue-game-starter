import { AppState } from '../state';

export default (state: AppState) => {
  const toasts = state.toasts.map(x => ({ ...x }));
  return toasts;
};
