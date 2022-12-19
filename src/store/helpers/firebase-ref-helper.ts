import { ref } from '@walts81/firebase-helpers';
import { getFirebasePrefix } from '../game/prefix';

export default (path: string) => {
  const firebasePrefix = getFirebasePrefix();
  return ref(`${firebasePrefix}${path}`);
};
