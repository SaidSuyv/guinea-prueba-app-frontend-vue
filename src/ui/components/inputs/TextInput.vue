<script setup>
import { ref } from 'vue';

const props = defineProps({
  placeholder: {
    type: String,
    default: 'Type your message here...'
  },
  model: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

defineEmits(['update:model']);

</script>
<template>
  <div
    class="w-full border-[1px] border-gray-400 rounded-lg"
    :class="{'cursor-not-allowed opacity-50': props.disabled}"
  >
    <input
      :value="props.model"
      @input="$emit('update:model', $event.target.value)"
      type="text"
      class="w-full px-3 py-2.5 outline-none"
      :class="{'cursor-not-allowed': props.disabled}"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
    />
  </div>
</template>