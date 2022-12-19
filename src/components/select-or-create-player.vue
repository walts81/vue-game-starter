<template>
  <div class="select-or-create-player list-group">
    <button
      type="button"
      class="list-group-item list-group-item-action action-item d-flex justify-content-between align-items-center"
      @click="onSelectCreate()"
    >
      Create New Player
      <i class="fas fa-chevron-right fa-lg"></i>
    </button>
    <button
      type="button"
      class="list-group-item list-group-item-action action-item d-flex justify-content-between align-items-center"
      @click="onSelectSelect()"
    >
      Select Existing Player
      <i class="fas fa-chevron-right fa-lg"></i>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  emits: ['create', 'select'],
  setup(_, { emit }) {
    const onSelectCreate = () => {
      emit('create');
    };
    const onSelectSelect = () => {
      emit('select');
    };
    return { onSelectCreate, onSelectSelect };
  },
};
</script>

<style lang="scss">
.select-or-create-player {
  .list-group-item.action-item {
    padding: 1.5rem;
    font-size: 1.5rem;
    text-align: left;
    .fas {
      opacity: 0.7;
    }
  }
}
</style>
