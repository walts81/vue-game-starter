import { ActionContext } from '../action-context';
import { actionTypes } from '../app/actions/_types';

export default async (
  ctx: ActionContext,
  title: string,
  text: string,
  log = true
) => {
  const payload = { title, text, log };
  await (ctx as any).dispatch(actionTypes.sendMessage, payload);
};
