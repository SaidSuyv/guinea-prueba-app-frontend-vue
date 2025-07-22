<script setup>
import Icon from '@/ui/shared/Icon.vue';

const props = defineProps({
  class: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    required: true
  },
  onPressed: {
    type: Function,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const onClick = () => {
  props.onPressed();
};

</script>
<template>
  <button
    tabindex="-1"
    type="button"
    v-on:click="onClick"
    :disabled="props.disabled"
    class="p-2 w-[40px] h-[40px] grid place-items-center rounded-[50%]"
    :class="{
      'cursor-not-allowed opacity-50': props.disabled,
      'hover:bg-gray-200 hover:cursor-pointer transition-colors duration-200': !props.disabled,
      [props.class]: true
    }"
  >
    <Icon :name="props.icon"></Icon>
  </button>
</template>