import { ActivityLogView, SelectPlayerView, StartGameView } from '../views';
import { storeAccess } from '../store/store-access';
import { actionTypes } from '../store/action-types';
import { getRoute } from './get-route';

const removeQueryParams = (to: any) => {
  return { ...to, query: {} };
};

export const initRoutes = (router: any) => {
  const routes = [
    { path: '/', redirect: '/start-game' },
    getRoute('activity-log', ActivityLogView),
    getRoute('select-player', SelectPlayerView),
    getRoute('start-game', StartGameView, false),
  ];
  routes.forEach(x => router.addRoute(x));

  router.beforeEach(async (to: any) => {
    if (to.meta.needsGame === true) {
      if (
        !storeAccess.store.state.rootGame.gameKey &&
        (!to.query || !to.query.gameKey)
      ) {
        return { path: '/start-game' };
      }
    }
    if (!!to.query && Object.keys(to.query).length > 0) {
      if (!!to.query.gameKey && !storeAccess.store.state.rootGame.gameKey) {
        await storeAccess.store.dispatch(
          actionTypes.rootGame.joinGame,
          to.query.gameKey
        );
      }
      if (
        !!to.query.playerKey &&
        !storeAccess.store.state.rootGame.myPlayerKey
      ) {
        await storeAccess.store.dispatch(
          actionTypes.rootGame.setMyPlayerKey,
          to.query.playerKey
        );
      }
      return removeQueryParams(to);
    }
    return true;
  });
};
