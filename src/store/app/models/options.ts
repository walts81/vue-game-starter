export interface Options {
  toastAutoCloseTimeout: number;
  messageRemovalDelay: number;
  currentSpaceAutoCloseTimeout: number;
}

export const getDefaultOptions = (): Options => ({
  toastAutoCloseTimeout: 10000,
  messageRemovalDelay: 5000,
  currentSpaceAutoCloseTimeout: 5000,
});
