<template>
  <div class="select-player-view">
    <app-header
      ref="header"
      :title="title"
      override-back
      @back="onBack()"
    ></app-header>
    <select-or-create
      v-if="!showCreate && !showSelect"
      @create="showCreate = true"
      @select="showSelect = true"
    ></select-or-create>
    <select-player
      v-if="showSelect"
      :items="currentPlayers"
      show-current
      @select="selectPlayer($event)"
    ></select-player>
    <create-player
      v-if="showCreate"
      @create="createPlayer($event)"
    ></create-player>
    <div class="list-group delete-game" v-if="!showCreate && !showSelect">
      <div
        class="list-group-item-action d-flex justify-content-between align-items-center danger"
        @click="onDeleteGame()"
      >
        <span>Delete Game</span>
        <i class="far fa-trash-alt fa-lg"></i>
      </div>
    </div>
    <confirm-modal
      ref="modal"
      title="Delete Game"
      message="Are you sure you want to delete this game?"
      show-cancel
      cancel-text="No"
      submit-text="Yes"
      @submit="onConfirmDelete()"
    ></confirm-modal>
  </div>
</template>

<script lang="ts">
import { computed, ref, nextTick } from 'vue';
import {
  actionTypes,
  getterTypes,
  getDefaultPlayer,
  getDefaultAddPlayerRequest,
  Player,
} from '../store';
import { storeAccess } from '../store/store-access';
import { routerAccess } from '../router/router-access';
import {
  Header as AppHeader,
  Modal as ConfirmModal,
} from '@walts81/vue-common-components';
import SelectOrCreate from '../components/select-or-create-player.vue';
import SelectPlayer from '../components/select-player.vue';
import CreatePlayer from '../components/create-player.vue';
import { configAccess } from '@/config';

export default {
  components: {
    AppHeader,
    SelectOrCreate,
    SelectPlayer,
    CreatePlayer,
    ConfirmModal,
  },
  setup() {
    const modal = ref<any>(null);
    const showCreate = ref(false);
    const showSelect = ref(false);
    const header = ref<any>(null);
    let manualBack = false;
    const createPlayer = async (item: { name: string }) => {
      let player = getDefaultPlayer(item.name);
      if (!!configAccess.config.initPlayer) {
        player = configAccess.config.initPlayer(player);
      }
      const payload = getDefaultAddPlayerRequest(player, true);
      await storeAccess.store.dispatch(actionTypes.rootGame.addPlayer, payload);
      showCreate.value = false;
      routerAccess.router.push(routerAccess.homeRoute);
    };
    const selectPlayer = async (player: Player) => {
      await storeAccess.store.dispatch(
        actionTypes.rootGame.setMyPlayerKey,
        player.key
      );
      showSelect.value = false;
      routerAccess.router.push(routerAccess.homeRoute);
    };
    const currentPlayers = computed(
      () => storeAccess.store.getters[getterTypes.rootGame.playablePlayers]
    );
    const title = computed(
      () => storeAccess.store.getters[getterTypes.rootApp.title]
    );
    const onDeleteGame = () => {
      modal.value.open();
    };
    const onConfirmDelete = async () => {
      await storeAccess.store.dispatch(
        actionTypes.rootGame.deleteGame,
        storeAccess.store.state.rootGame.gameKey
      );
    };
    const onBack = async () => {
      if (manualBack) return;
      if (showCreate.value || showSelect.value) {
        showCreate.value = false;
        showSelect.value = false;
      } else {
        manualBack = true;
        await storeAccess.store.dispatch(actionTypes.rootGame.clearGame);
        header.value.backButton.goBack(true);
        await nextTick();
        manualBack = false;
      }
    };
    return {
      createPlayer,
      selectPlayer,
      header,
      currentPlayers,
      showCreate,
      showSelect,
      onBack,
      onDeleteGame,
      modal,
      onConfirmDelete,
      title,
    };
  },
};
</script>

<style lang="scss">
@import '~/node_modules/@walts81/vue-common-components/src/styles/variables';

.select-player-view {
  .list-group.delete-game {
    margin-top: -1px;
    .list-group-item-action {
      padding: 1.5rem;
      font-size: 1.5rem;
      text-align: left;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      cursor: pointer;
      &.danger {
        background: $danger;
        color: $white;
      }
      i.far {
        opacity: 0.7;
      }
    }
  }
}
</style>
