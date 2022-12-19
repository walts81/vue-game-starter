import { ActionContext } from '../../action-context';
import { runAsync } from '../../helpers';
import { AppState } from '../state';
import { mutationTypes } from '../mutations/_types';
import { ToastMessage } from '../models';

export default async (ctx: ActionContext<AppState>, payload: ToastMessage) => {
  await runAsync(() => {
    const toasts = [...ctx.state.toasts];
    toasts.push(payload);
    ctx.commit(mutationTypes.setToasts, toasts);
  });
};
