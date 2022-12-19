import { onChildAdded } from '@walts81/firebase-helpers';
import { ActionContext } from '@/store/action-context';
import { ref } from '@/store/helpers';
import { AppState } from '../state';
import { ToastMessage, getDefaultToastMessage } from '../models';
import { mutationTypes } from '../mutations/_types';
import { actionTypes } from './_types';

interface FirebaseToastMessage extends ToastMessage {
  key: string;
  ownerKey: string;
}

export default async (ctx: ActionContext<AppState>) => {
  const gameKey = ctx.rootState.rootGame.gameKey;
  const messagesRef = ref(`/messages/${gameKey}`);
  onChildAdded<FirebaseToastMessage>(messagesRef, async data => {
    const myPlayerKey = ctx.rootState.rootGame.myPlayerKey;
    if (data.ownerKey !== myPlayerKey) {
      await ctx.dispatch(
        actionTypes.addToastMessage,
        getDefaultToastMessage(data.title, data.text, '', true)
      );
    }
  });
  const activityLogRef = ref(`/message-history/${gameKey}`);
  onChildAdded<FirebaseToastMessage>(activityLogRef, data => {
    const log = ctx.state.activityLog.map(x => ({ ...x }));
    const newLogEntry = { ...data };
    log.push(newLogEntry);
    ctx.commit(mutationTypes.setActivityLog, log);
  });
};
