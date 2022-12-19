import { getDefaultOptions, Options, ToastMessage } from './models';

export interface AppState {
  isBusy: boolean;
  toasts: ToastMessage[];
  options: Options;
  activityLog: { title: string; text: string }[];
}

export const getDefaultAppState = (): AppState => ({
  isBusy: false,
  toasts: [],
  options: getDefaultOptions(),
  activityLog: [],
});
