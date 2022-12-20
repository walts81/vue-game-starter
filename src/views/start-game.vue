<template>
  <div class="start-game">
    <app-header :title="title" hide-back></app-header>
    <text-input
      type="text"
      v-model="gameKey"
      placeholder="Game name"
      action-text="Create New Game"
      has-action
      @on-action="joinGame()"
    ></text-input>
    <br />
    <div class="games-list list-group" v-if="games.length > 0">
      <label>OR</label><br />
      <label>Join a Game</label>
      <div
        class="game-item list-group-item d-flex justify-content-between align-items-center"
        v-for="item in games"
        :key="item"
        @click="selectGame(item)"
      >
        <span>{{ item }}</span>
        <i class="fas fa-chevron-right fa-lg"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref, onMounted } from 'vue';
import { actionTypes, getterTypes, notifyUser } from '../store';
import { storeAccess } from '../store/store-access';
import { routerAccess } from '../router/router-access';
import { AppHeader, TextInput } from '@walts81/vue-common-components';

export default {
  components: { AppHeader, TextInput },
  setup() {
    const gameKey = ref('');
    const games = computed(
      () => storeAccess.store.getters[getterTypes.rootGame.games]
    );
    const joinGame = async () => {
      if (!gameKey.value || !gameKey.value.trim()) {
        await notifyUser(
          storeAccess.store,
          'Invalid Game Name',
          'Please enter a valid game name to create'
        );
      } else {
        await storeAccess.store.dispatch(actionTypes.rootGame.joinGame, {
          gameKey: gameKey.value,
          gameType: '1',
        });
        routerAccess.router.push('/select-player');
      }
    };
    const selectGame = async (id: string) => {
      await storeAccess.store.dispatch(actionTypes.rootGame.joinGame, {
        gameKey: id,
        gameType: '1',
      });
      routerAccess.router.push('/select-player');
    };
    const title = computed(
      () => storeAccess.store.getters[getterTypes.rootApp.title]
    );
    onMounted(() => storeAccess.store.dispatch(actionTypes.rootGame.clearGame));
    return { joinGame, selectGame, games, gameKey, title };
  },
};
</script>

<style lang="scss">
.start-game {
  .input-group.text-start {
    input[type='text'].form-control {
      border-radius: 0;
    }
    button.btn.btn-outline-secondary {
      border-radius: 0;
      border-top-width: 0;
    }
  }
  .list-group-item.game-item {
    padding: 1.5rem;
    font-size: 1.5rem;
    text-align: left;
    cursor: pointer;
    .fas {
      opacity: 0.7;
    }
  }
  .manual-or-automated {
    padding: 1rem;
    .form-check {
      display: flex;
      align-items: flex-start;
      font-size: 1.5rem;
      label {
        margin-left: 0.75rem;
      }
    }
  }
}
</style>
