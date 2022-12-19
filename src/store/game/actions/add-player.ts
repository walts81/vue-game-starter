import { push, update } from '@walts81/firebase-helpers';
import { ref, mapPlayer, setBusy } from '@/store/helpers';
import { AddPlayerRequest, Player } from '../models';
import getPlayers from '../getters/get-players';
import { mutationTypes } from '../mutations/_types';
import setMyPlayerKey from './set-my-player-key';

export default async (ctx: any, payload: AddPlayerRequest): Promise<void> => {
  if (ctx.state.players.some((x: Player) => x.name === payload.player.name))
    return;

  await setBusy(ctx, true);
  const player = mapPlayer(payload.player);
  const players = getPlayers(ctx.state);
  const playersPath = `/games/${ctx.state.gameKey}/players`;
  const temp = await push(ref(playersPath), player);
  player.key = temp.key as any;
  await update(ref(`${playersPath}/${player.key}`), player);
  players.push(player);
  ctx.commit(mutationTypes.setPlayers, players);
  if (payload.isMyPlayer) {
    await setMyPlayerKey(ctx, player.key);
  }
  await setBusy(ctx, false);
};
