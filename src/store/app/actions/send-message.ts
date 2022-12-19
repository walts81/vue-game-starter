import { push, remove } from '@walts81/firebase-helpers';
import { ActionContext } from '@/store/action-context';
import { ref } from '@/store/helpers';
import { AppState } from '../state';

export default async (
  ctx: ActionContext<AppState>,
  payload: { title: string; text: string; log: boolean }
) => {
  const gameKey = ctx.rootState.rootGame.gameKey;
  const messagesRef = ref(`/messages/${gameKey}`);
  const historyRef = ref(`/message-history/${gameKey}`);
  const myPlayerKey = ctx.rootState.rootGame.myPlayerKey;
  const message = {
    ownerKey: myPlayerKey,
    title: payload.title,
    text: payload.text,
    timestamp: new Date().toISOString(),
  };
  if (payload.log) {
    await push(historyRef, message);
  }
  const s = await push(messagesRef, message);
  const key = s.key;
  setTimeout(() => {
    const r = ref(`/messages/${gameKey}/${key}`);
    remove(r);
  }, ctx.state.options.messageRemovalDelay);
};
