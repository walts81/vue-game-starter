const unsubs: (() => void)[] = [];
let isUnsubscribing = false;

export const addSubcription = (sub: () => void) => {
  unsubs.push(sub);
};

export const unsubscribe = () => {
  if (isUnsubscribing) return;
  isUnsubscribing = true;
  for (const unsub of unsubs) {
    unsub();
  }
  unsubs.splice(0, unsubs.length);
  isUnsubscribing = false;
};
