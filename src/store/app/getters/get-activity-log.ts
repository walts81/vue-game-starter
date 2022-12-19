import { AppState } from '../state';

export default (state: AppState) => {
  const log = [...state.activityLog];
  log.sort((a: any, b: any) =>
    a.timestamp > b.timestamp ? -1 : a.timestamp < b.timestamp ? 1 : 0
  );
  return log;
};
