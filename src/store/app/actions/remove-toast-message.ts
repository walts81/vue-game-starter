import { ActionContext } from '../../action-context';
import { runAsync } from '../../helpers';
import { AppState } from '../state';
import { mutationTypes } from '../mutations/_types';

export default async (ctx: ActionContext<AppState>, payload: number) => {
  await runAsync(() => {
    const toasts = [...ctx.state.toasts];
    const ix = toasts.findIndex(x => x.messageId === payload);
    if (ix > -1) {
      toasts.splice(ix, 1);
      ctx.commit(mutationTypes.setToasts, toasts);
    }
  });
};
