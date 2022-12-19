import { needsGame } from './route-metadata';

export const getRoute = (name: string, component: any, gameNeeded = true) => {
  const route = {
    name,
    path: '/' + name,
    component,
  };
  return gameNeeded ? { ...route, ...needsGame } : route;
};
