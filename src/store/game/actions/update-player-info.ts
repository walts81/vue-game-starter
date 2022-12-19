import { update } from '@walts81/firebase-helpers';
import { mapPlayers, ref } from '@/store/helpers';
import { actionTypes as appActions } from '@/store/app/actions/_types';
import { mutationTypes } from '../mutations/_types';
import { Player } from '../models';

export default async (
  ctx: any,
  payload: Player,
  noBusyWait = false
): Promise<void> => {
  if (!noBusyWait) await ctx.dispatch(appActions.setAppBusy, true);
  const players = mapPlayers(ctx.state.players);
  const ix = players.findIndex(x => x.key === payload.key);
  if (ix > -1) {
    players.splice(ix, 1, payload);
    ctx.commit(mutationTypes.setPlayers, players);
  }
  await update(
    ref(`/games/${ctx.state.gameKey}/players/${payload.key}`),
    payload
  );
  if (!noBusyWait) await ctx.dispatch(appActions.setAppBusy, false);
};
