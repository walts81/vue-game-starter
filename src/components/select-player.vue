<template>
  <div class="player-selection list-group">
    <label> {{ label }} </label>
    <div
      class="player list-group-item d-flex justify-content-between align-items-center"
      v-for="item in items"
      :key="item.key"
      @click="onSelect(item)"
    >
      <div class="name">
        <span>{{ item.name }}</span>
      </div>
      <i class="fas fa-chevron-right fa-lg"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { Player } from '../store/models';

export default {
  props: {
    label: String,
    items: {
      type: Array as PropType<Array<Player>>,
      default: () => [],
    },
  },
  emits: ['select'],
  setup(_, { emit }) {
    const onSelect = (player: Player) => {
      emit('select', player);
    };
    return { onSelect };
  },
};
</script>

<style lang="scss">
.player-selection {
  .list-group-item.player {
    padding: 1.5rem;
    font-size: 1.5rem;
    text-align: left;
    cursor: pointer;
    .name {
      i.fas {
        margin-left: 1rem;
      }
    }
  }
  .fas {
    opacity: 0.7;
  }
}
</style>
