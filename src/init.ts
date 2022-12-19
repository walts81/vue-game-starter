import { setFirebasePrefix } from './store/game/prefix';
import { storeAccess } from './store/store-access';
import { modules } from './store/modules';
import { initRoutes } from './router/routes';
import { routerAccess } from './router/router-access';
import { init } from '@walts81/firebase-helpers';
import { GameStarterConfig, configAccess } from './config';

export const GameStarter = {
  init: async (config: (x: GameStarterConfig) => Promise<void>) => {
    configAccess.config.storeModules = modules;
    await config(configAccess.config);
    storeAccess.store = configAccess.config.store;
    routerAccess.router = configAccess.config.router;
    routerAccess.homeRoute = configAccess.config.homeRoute;
    initRoutes(routerAccess.router);
    setFirebasePrefix('/' + configAccess.config.name);
    init(configAccess.config.firebaseConfig);
    return configAccess.config;
  },
};
