import { mutationTypes } from './_types';
import setActivityLog from './set-activity-log';
import setIsAppBusy from './set-is-app-busy';
import setToasts from './set-toasts';
import setTitle from './set-title';

export const mutations = {
  [mutationTypes.setActivityLog]: setActivityLog,
  [mutationTypes.setIsAppBusy]: setIsAppBusy,
  [mutationTypes.setToasts]: setToasts,
  [mutationTypes.setTitle]: setTitle,
};
