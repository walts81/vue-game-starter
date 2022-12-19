import { ActionContext } from '../../action-context';
import { runAsync } from '../../helpers';
import { AppState } from '../state';
import { mutationTypes } from '../mutations/_types';

export default async (ctx: ActionContext<AppState>) => {
  await runAsync(() => {
    ctx.commit(mutationTypes.setActivityLog, []);
  });
};
