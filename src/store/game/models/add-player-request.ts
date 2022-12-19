import { Player } from './player';

export interface AddPlayerRequest {
  player: Player;
  isMyPlayer: boolean;
}

export const getDefaultAddPlayerRequest = (
  player: Player,
  isMyPlayer = false
): AddPlayerRequest => ({
  player,
  isMyPlayer,
});
