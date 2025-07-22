<script setup>
import FilledButton from '@/ui/components/buttons/FilledButton.vue';
import DateInput from '@/ui/components/inputs/DateInput.vue';
import SelectInput from '@/ui/components/inputs/SelectInput.vue';
import TextInput from '@/ui/components/inputs/TextInput.vue';
import { useRegisterStepperStore } from '@/ui/stores/register/registerStepperStore';
import { useRegisterStore } from '@/ui/stores/register/registerStore';

const registerStepperStore = useRegisterStepperStore();
const registerStore = useRegisterStore();

const onNext = () => {
  registerStepperStore.nextStep();
};

</script>
<template>
  <form @submit.prevent class="h-[340px] flex flex-col gap-4">
    <TextInput
      placeholder="Nombres"
      :model="registerStore.name"
      @update:model="registerStore.setName($event)"
    />

    <TextInput
      placeholder="Apellidos"
      :model="registerStore.lastname"
      @update:model="registerStore.setLastname($event)"
    />

    <TextInput
      placeholder="Correo electrónico"
      :model="registerStore.email"
      @update:model="registerStore.setEmail($event)"
    />
    
    <SelectInput
      :model="registerStore.gender"
      @update:model="registerStore.setGender($event)"
      :options="[
        { label: 'Masculino', value: 'M' },
        { label: 'Femenino', value: 'F' },
        { label: 'Prefiero no especificar', value: 'N' }
      ]"
      placeholder="Género"
    />

    <DateInput
      placeholder="Fecha de nacimiento"
      :model="registerStore.birthdate"
      @update:model="registerStore.setBirthdate($event)"
    />

    <FilledButton
      text="Siguiente"
      type="submit"
      :onPressed="onNext"
    />
  </form @submit.preven>
</template>