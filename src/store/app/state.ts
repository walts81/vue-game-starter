import { getDefaultOptions, Options, ToastMessage } from './models';

export interface AppState {
  title: string;
  isBusy: boolean;
  toasts: ToastMessage[];
  options: Options;
  activityLog: { title: string; text: string }[];
}

export const getDefaultAppState = (): AppState => ({
  title: '',
  isBusy: false,
  toasts: [],
  options: getDefaultOptions(),
  activityLog: [],
});
