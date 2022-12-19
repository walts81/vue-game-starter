import setAppBusy from './set-app-busy';
import { actionTypes } from './_types';
import addToastMessage from './add-toast-message';
import removeToastMessage from './remove-toast-message';
import subscribeToMessages from './subscribe-to-messages';
import sendMessage from './send-message';
import notifyUser from './notify-user';
import clearLog from './clear-log';

export const actions = {
  [actionTypes.setAppBusy]: setAppBusy,
  [actionTypes.addToastMessage]: addToastMessage,
  [actionTypes.removeToastMessage]: removeToastMessage,
  [actionTypes.subscribeToMessages]: subscribeToMessages,
  [actionTypes.sendMessage]: sendMessage,
  [actionTypes.notifyUser]: notifyUser,
  [actionTypes.clearLog]: clearLog,
};
