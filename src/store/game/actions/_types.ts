import { prefix } from '../prefix';

export const actionTypes = {
  addPlayer: `${prefix}add_player`,
  clearGame: `${prefix}clear_game`,
  deleteGame: `${prefix}delete_game`,
  freeParking: `${prefix}free_parking`,
  get200ForGo: `${prefix}get_200_for_go`,
  getGames: `${prefix}get_games`,
  joinGame: `${prefix}join_game`,
  payEachPlayer: `${prefix}pay_each_player`,
  payPlayer: `${prefix}pay_player`,
  resetGame: `${prefix}reset_game`,
  setMyPlayerKey: `${prefix}set_my_player_key`,
  transferMoney: `${prefix}transfer_money`,
  unsetGame: `${prefix}unset_game`,
  updatePlayerInfo: `${prefix}update_player_info`,
  payIncomeTax: `${prefix}pay_income_tax`,
  payTax: `${prefix}pay_tax`,
  getMoneyFromBank: `${prefix}get_money_from_bank`,
};
