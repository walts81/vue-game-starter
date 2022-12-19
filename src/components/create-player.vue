<template>
  <div class="create-player">
    <text-input
      type="text"
      v-model="playerName"
      placeholder="Player name"
    ></text-input>
    <action-fab
      bottom
      right
      icon="fas fa-plus"
      button-type="btn-primary"
      v-if="canCreate()"
      @select="onCreate()"
    ></action-fab>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { ActionFab, TextInput } from '@walts81/vue-common-components';

export default {
  components: { TextInput, ActionFab },
  emits: ['create'],
  setup(_, { emit }) {
    const playerName: any = ref('');
    const canCreate = () => !!playerName.value;
    const onCreate = () => {
      const player = {
        name: playerName.value,
      };
      emit('create', player);
    };
    return { playerName, canCreate, onCreate };
  },
};
</script>
