import { mutationTypes } from '../mutations/_types';
import unsetGame from './unset-game';

export default async (ctx: any) => {
  await unsetGame(ctx);
  ctx.commit(mutationTypes.setGameName, '');
  ctx.commit(mutationTypes.setPlayers, []);
  ctx.commit(mutationTypes.setMyplayerKey, '');
};
