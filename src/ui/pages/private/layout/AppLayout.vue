<script setup>
import AppSidebar from './AppSidebar.vue';

</script>
<template>
  <div class="h-full flex flex-col gap-4 md:flex-row">
    <AppSidebar />
    <div class="flex-1">
      <router-view />
    </div>
  </div>
</template>