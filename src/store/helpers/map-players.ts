import { configAccess } from '@/config';
import { Player } from '@/store/game/models/player';

export const mapPlayer = (player: Player): Player => {
  if (!!configAccess.config.mapPlayer) {
    return configAccess.config.mapPlayer(player);
  }
  return { ...player };
};

export const mapPlayers = (players: Player[]) => players.map(mapPlayer);
