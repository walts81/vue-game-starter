import { runAsync } from '@/store/helpers';
import { mutationTypes } from '../mutations/_types';

export default async (ctx: any) => {
  await runAsync(() => {
    ctx.commit(mutationTypes.setGameName, '');
  });
};
