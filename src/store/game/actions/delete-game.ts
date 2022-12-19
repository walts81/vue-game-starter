import { set, remove } from '@walts81/firebase-helpers';
import { routerAccess } from '../../../router/router-access';
import { ref } from '../../helpers';
import clearGame from './clear-game';
import { unsubscribe } from './unsubs';
import { mutationTypes } from '../mutations/_types';

export default async (ctx: any, gameKey: string) => {
  const dbRef = ref(`/games/${gameKey}`);
  unsubscribe();
  await remove(dbRef);
  const games = [...ctx.state.games];
  const ix = games.indexOf(gameKey);
  if (ix > -1) {
    games.splice(ix, 1);
    set(ref('/gameNames'), games);
    ctx.commit(mutationTypes.setGames, games);
  }
  await clearGame(ctx);
  routerAccess.router.replace('/start-game');
};
