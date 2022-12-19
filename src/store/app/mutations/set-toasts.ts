import { ToastMessage } from '../models';
import { AppState } from '../state';

export default (state: AppState, payload: ToastMessage[]) => {
  state.toasts = payload;
};
