<script setup lang="ts">
import { useToast } from 'vue-toastification';
import { useStateStore } from './ui/stores/stateStore';

const toast = useToast();
const stateStore = useStateStore();

stateStore.$subscribe((_, state) => {
  if (!state.isLoading && state.error != null) {
    toast.clear();
    toast.error(state.error);
    stateStore.setError(null);
  }
});

</script>

<template>
  <router-view></router-view>
</template>