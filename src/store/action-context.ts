export interface ActionContext<State = any> {
  state: State;
  rootState: any;
  getters: { [key: string]: any };
  dispatch: <T = any>(action: string, payload?: T) => Promise<any>;
  commit: <T = any>(mutation: string, payload?: T) => void;
}
