import sendMessage from '@/store/helpers/send-message';
import { Player } from '../models';
import { mutationTypes } from '../mutations/_types';

export default async (ctx: any, payload: string): Promise<void> => {
  ctx.commit(mutationTypes.setMyplayerKey, payload);
  const players = ctx.state.players;
  const ix = players.findIndex((x: Player) => x.key === payload);
  const player = players[ix];
  await sendMessage(
    ctx,
    'Player Added',
    `${player.name} has joined the game`,
    false
  );
};
