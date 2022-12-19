import { getterTypes } from './_types';
import getIsAppBusy from './get-is-app-busy';
import getToastMessages from './get-toast-messages';
import getOptions from './get-options';
import getActivityLog from './get-activity-log';

export const getters = {
  [getterTypes.isAppBusy]: getIsAppBusy,
  [getterTypes.toastMessages]: getToastMessages,
  [getterTypes.options]: getOptions,
  [getterTypes.activityLog]: getActivityLog,
};
