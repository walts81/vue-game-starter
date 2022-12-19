import { ActionContext } from '../action-context';
import { actionTypes } from '../app/actions/_types';

export default async (
  ctx: ActionContext,
  title: string,
  text: string,
  autoClose = true
) => {
  const payload = { title, text, autoClose };
  await (ctx as any).dispatch(actionTypes.notifyUser, payload);
};
