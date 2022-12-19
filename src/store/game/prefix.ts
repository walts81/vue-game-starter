export const prefix = 'rootgame_';

let firebasePrefix = '';
export const setFirebasePrefix = (prefix: string) => (firebasePrefix = prefix);
export const getFirebasePrefix = () => firebasePrefix;
