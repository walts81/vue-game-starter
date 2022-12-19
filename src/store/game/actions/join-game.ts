import {
  DatabaseReference,
  get,
  set,
  onArrayOnce,
  onChildAddedWithCommit,
  onChildChangedWithCommit,
} from '@walts81/firebase-helpers';
import { mapPlayer, mapPlayers, ref } from '@/store/helpers';
import { actionTypes as appActions } from '@/store/app/actions/_types';
import { mutationTypes } from '../mutations/_types';
import resetGame from './reset-game';
import clearGame from './clear-game';

export default async (
  ctx: any,
  payload: { gameKey: string; gameType: string }
): Promise<void> => {
  await ctx.dispatch(appActions.setAppBusy, true);
  const gameListRef = ref('/gameNames');
  const list = await get<string[]>(gameListRef, []);
  ctx.commit(mutationTypes.setGames, list);
  if (list.indexOf(payload.gameKey) < 0) {
    list.push(payload.gameKey);
    set(gameListRef, list);
    await resetGame(ctx, payload);
  }
  ctx.commit(mutationTypes.setGames, list);
  await clearGame(ctx);
  ctx.commit(mutationTypes.setGameName, payload.gameKey);

  const gamesRefPrefix = `/games/${payload.gameKey}`;

  const initData = async <T>(
    ref: DatabaseReference,
    mapArray: (data: any[]) => T[],
    mutation: string
  ): Promise<boolean> => {
    const data = await onArrayOnce<T>(ref);
    const mappedArr = mapArray(data);
    ctx.commit(mutation, mappedArr);
    return mappedArr.length > 0;
  };

  const playersRef = ref(`${gamesRefPrefix}/players`);
  await initData(playersRef, mapPlayers, mutationTypes.setPlayers);

  onChildAddedWithCommit(
    playersRef,
    () => ctx.state.players,
    ctx.commit,
    mutationTypes.setPlayers,
    mapPlayer
  );
  onChildChangedWithCommit(
    playersRef,
    () => ctx.state.players,
    ctx.commit,
    mutationTypes.setPlayers,
    mapPlayer
  );
  await ctx.dispatch(appActions.subscribeToMessages);
  await ctx.dispatch(appActions.setAppBusy, false);
};
