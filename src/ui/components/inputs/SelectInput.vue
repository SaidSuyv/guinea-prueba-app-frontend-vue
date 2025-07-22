<script setup>

const props = defineProps({
  model: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    default: () => []
  },
  placeholder: {
    type: String,
    default: 'Select an option'
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

defineEmits(['update:model']);

</script>
<template>
  <div class="w-full pr-3 border-[1px] border-gray-400 rounded-lg relative">
    <select
      :value="props.model"
      @change="$emit('update:model', $event.target.value)"
      class="w-full px-3 py-2.5 outline-none"
      :disabled="props.disabled"
    >
      <option value="" disabled selected>{{ props.placeholder }}</option>
      <option v-for="option in props.options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>