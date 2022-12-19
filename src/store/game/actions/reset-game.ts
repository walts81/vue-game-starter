import { remove, set } from '@walts81/firebase-helpers';
import { configAccess } from '@/config';
import { ref, setBusy } from '@/store/helpers';
import { actionTypes as appActions } from '@/store/app/actions/_types';
import { mutationTypes } from '../mutations/_types';

export default async (ctx: any, payload?: any): Promise<void> => {
  await setBusy(ctx, true);
  if (!payload) {
    payload = {
      gameKey: ctx.state.gameKey,
      gameType: ctx.rootState.rootApp.gameType,
    };
  }
  const gameType = payload.gameType || '1';
  await set(ref(`/games/${payload.gameKey}/gameType`), gameType);

  ctx.commit(mutationTypes.setGameName, payload.gameKey);

  if (!!configAccess.config.gameResetAction) {
    await ctx.dispatch(configAccess.config.gameResetAction);
  }

  const historyRef = ref(`/message-history/${payload.gameKey}`);
  await remove(historyRef);
  const messagesRef = ref(`/messages/${payload.gameKey}`);
  await remove(messagesRef);
  await ctx.dispatch(appActions.clearLog);
  await setBusy(ctx, false);
};
