import { Player } from './store/models';

export interface GameStarterConfig {
  name: string;
  homeRoute: string;
  router: any;
  store: any;
  storeModules: any;
  firebaseConfig?: any;
  gameResetAction: string;
  mapPlayer?: <T extends Player>(x: Player) => T;
  initPlayer?: <T extends Player>(x: Player) => T;
  filterPlayers?: (x: Player[]) => Player[];
  filterOtherPlayers?: (x: Player[]) => Player[];
  filterPlayablePlayers?: (x: Player[]) => Player[];
}

interface ConfigAccess {
  config: GameStarterConfig;
}

export const configAccess: ConfigAccess = {
  config: {
    name: '',
    homeRoute: '',
    router: null,
    store: null,
    storeModules: null,
    gameResetAction: '',
  },
};
