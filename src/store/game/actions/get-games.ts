import { onValue } from '@walts81/firebase-helpers';
import { ref, getResultAsync } from '../../helpers';
import { mutationTypes } from '../mutations/_types';

let unsub: () => void = null as any;

export default async (ctx: any) => {
  return await getResultAsync(() => {
    if (!unsub) {
      const dbRef = ref('/gameNames');
      unsub = onValue<string[]>(
        dbRef,
        data => {
          ctx.commit(mutationTypes.setGames, data);
        },
        []
      );
    }
    return ctx.state.games;
  });
};
