<script setup>

import IconImage from '@/assets/images/favicon-guinea-150x150.png';
import { useUserStore } from '@/ui/stores/userStore';

const userStore = useUserStore();

</script>
<template>
  <div class="h-full flex flex-col items-center justify-center gap-4">
    <img class="max-w-[64px]" :src="IconImage" alt="Guinea's Logo">
    <p class="text-center text-xl font-bold">Hola, {{ userStore.getFullName }}</p>
    <p class="text-center text-sm">Este es el fin de la prueba</p>
    <p class="text-center text-sm">Puedes continuar en la sección de configuración</p>
  </div>
</template>