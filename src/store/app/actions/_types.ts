import { prefix } from '../prefix';

export const actionTypes = {
  setAppBusy: `${prefix}set_app_busy`,
  addToastMessage: `${prefix}add_toast_message`,
  removeToastMessage: `${prefix}remove_toast_message`,
  subscribeToMessages: `${prefix}subscribe_to_messages`,
  sendMessage: `${prefix}send_message`,
  notifyUser: `${prefix}notify_user`,
  clearLog: `${prefix}clear_log`,
};
