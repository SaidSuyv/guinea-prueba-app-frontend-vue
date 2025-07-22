<script setup>
import IconButton from '@/ui/components/buttons/IconButton.vue';
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

const showPassword = ref(false);

</script>
<template>
  <div
    class="w-full border-[1px] border-gray-400 grid grid-cols-6 gap-2 items-center justify-center rounded-lg"
    :class="{'cursor-not-allowed opacity-50': props.disabled}"
    >
    <input
      :value="props.model"
      @input="$emit('update:model', $event.target.value)"
      :type="showPassword ? 'text' : 'password'"
      class="col-span-5 px-3 py-2.5 outline-none"
      :class="{'cursor-not-allowed': props.disabled}"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
    />
    <div class="col-span-1 grid place-items-center">
      <IconButton
        :icon="showPassword ? 'Eye' : 'EyeClosed'"
        :onPressed="() => showPassword = !showPassword"
        :disabled="props.disabled"
        />
    </div>
  </div>
</template>