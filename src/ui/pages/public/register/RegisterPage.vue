<script setup>

import smallLogoImage from '@/assets/images/favicon-guinea-150x150.png';
import IconButton from '@/ui/components/buttons/IconButton.vue';
import router from '@/ui/router';
import { computed, defineAsyncComponent, ref } from 'vue';
import StepPersonalInformation from './steps/StepPersonalInformation.vue';
import StepAccountInformation from './steps/StepAccountInformation.vue';
import { useRegisterStepperStore } from '@/ui/stores/register/registerStepperStore';
import { useStateStore } from '@/ui/stores/stateStore';
import { useRegisterStore } from '@/ui/stores/register/registerStore';

const registerStepperStore = useRegisterStepperStore();
const registerStore = useRegisterStore();
const stateStore = useStateStore();

const steps = [
  { component: StepPersonalInformation, height: '340px' },
  { component: StepAccountInformation, height: '150px' },
];

const onBack = () => {
  if (registerStepperStore.currentStep > 0) {
    registerStepperStore.prevStep();
  } else {
    registerStore.clearRegister();
    router.push({ name: 'login' });
  }
};

</script>
<template>
  <div class="bg h-full sm:py-6 flex items-center justify-center">
    <div class="bg-white h-full max-h-full xs:h-fit w-full xs:max-w-[400px] xs:rounded-3xl shadow-md p-5 xs:p-10 border-[1px] border-gray-200 flex flex-col justify-center overflow-y-auto overflow-x-hidden">
      <div class="mb-5 flex flex-col gap-3">
        <img :src="smallLogoImage" alt="Guinea's logo" class="max-w-[50px]" />
        <div class="flex items-center gap-2">
          <IconButton
            icon="ArrowLeft"
            :onPressed="onBack"
            :disabled="stateStore.isLoading"
          />
          <p class="text-center text-lg text-bold">Crear nueva cuenta</p>
        </div>
      </div>
      <div class="relative transition-all" :class="`h-[${steps[registerStepperStore.currentStep].height}]`">
        <transition :name="registerStepperStore.getTransitionName" mode="out-in">
          <component :is="steps[registerStepperStore.currentStep].component" :key="registerStepperStore.currentStep"></component>
        </transition>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Entrada hacia la izquierda */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease;
  position: absolute;
  width: 100%;
}

.slide-left-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-left-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-left-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Entrada hacia la derecha */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
  position: absolute;
  width: 100%;
}

.slide-right-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-right-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-right-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

</style>