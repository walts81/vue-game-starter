import { actionTypes } from '../app/actions/_types';

export default async (ctx: any, isBusy: boolean) => {
  await ctx.dispatch(actionTypes.setAppBusy, isBusy);
};
