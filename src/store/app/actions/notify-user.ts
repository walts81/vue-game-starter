import { ActionContext } from '../../action-context';
import { AppState } from '../state';
import { actionTypes } from './_types';
import { getDefaultToastMessage } from '../models';

export default async (
  ctx: ActionContext<AppState>,
  payload: { title: string; text: string; autoClose?: boolean }
) => {
  await ctx.dispatch(
    actionTypes.addToastMessage,
    getDefaultToastMessage(payload.title, payload.text, '', payload.autoClose)
  );
};
