<script setup>

const props = defineProps({
  class: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'button'
  },
  text: {
    type: String,
    required: true
  },
  onPressed: {
    type: Function,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

</script>
<template>
  <button
    :class="{
      'cursor-not-allowed opacity-50': props.disabled,
      'hover:bg-cyan-500 transition-colors duration-200 hover:cursor-pointer': !props.disabled,
      [props.class]: true
    }"
    class="w-full bg-primary text-white px-4 py-2 rounded-lg "
    :disabled="props.disabled"
    :type="props.type"
    v-on:click="props.onPressed"
  >{{ props.text }}</button>
</template>