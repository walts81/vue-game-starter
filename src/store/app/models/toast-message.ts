let messageId = 0;

export interface ToastMessage {
  messageId: number;
  title: string;
  text: string;
  autoClose: boolean;
  icon?: string;
}

export const getMessageToSend = (title: string, text: string, log = true) => ({
  title,
  text,
  log,
});

export const getDefaultToastMessage = (
  title: string,
  text: string,
  icon = '',
  autoClose = false
): ToastMessage => ({
  messageId: ++messageId,
  title,
  text,
  icon,
  autoClose,
});
