import { ActionContext } from './action-context';

interface StoreAccess {
  store: ActionContext;
}

export const storeAccess: StoreAccess = {
  store: null as any,
};
