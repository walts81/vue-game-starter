import { mutationTypes } from './_types';
import setActivityLog from './set-activity-log';
import setIsAppBusy from './set-is-app-busy';
import setToasts from './set-toasts';

export const mutations = {
  [mutationTypes.setActivityLog]: setActivityLog,
  [mutationTypes.setIsAppBusy]: setIsAppBusy,
  [mutationTypes.setToasts]: setToasts,
};
