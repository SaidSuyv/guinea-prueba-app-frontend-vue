<script setup>
import Icon from '@/ui/shared/Icon.vue';

const MenuItems = [
  {
    to: '/',
    icon: 'House',
    text: 'Inicio'
  },
  {
    to: '/settings',
    icon: 'Settings',
    text: 'Configuración'
  }
];

</script>
<template>
  <div class="bg-white p-3 rounded-lg border-[1px] border-gray-200 flex items-center justify-around md:flex-col md:gap-1 md:items-start md:justify-start md:p-5">
    <router-link
      v-for="menuItem of MenuItems"
      :to="menuItem.to"
    >
      <template v-slot="{ isActive, isExactActive }">
        <div 
          class="p-3 rounded-md font-bold flex flex-col items-center xs:gap-2 xs:flex-row hover:bg-gray-100"
          :class="{ 'text-secondary': isExactActive }"
        >
          <Icon :name="menuItem.icon" :strokeWidth="1.2" />
          <span>{{ menuItem.text }}</span>
        </div>
      </template>
    </router-link>
  </div>
</template>