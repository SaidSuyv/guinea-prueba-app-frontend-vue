<script setup>
import { RegisterUser } from '@/application/use-cases/RegisterUser';
import { AuthRepositoryImpl } from '@/infrastructure/repositories/authRepository';
import FilledButton from '@/ui/components/buttons/FilledButton.vue';
import PasswordInput from '@/ui/components/inputs/PasswordInput.vue';
import TextInput from '@/ui/components/inputs/TextInput.vue';
import router from '@/ui/router';
import { useAuthStore } from '@/ui/stores/authStore';
import { useRegisterStepperStore } from '@/ui/stores/register/registerStepperStore';
import { useRegisterStore } from '@/ui/stores/register/registerStore';
import { useStateStore } from '@/ui/stores/stateStore';
import { useUserStore } from '@/ui/stores/userStore';
import { useToast } from 'vue-toastification';

const registerStepperStore = useRegisterStepperStore();
const registerStore = useRegisterStore();
const stateStore = useStateStore();
const authStore = useAuthStore();
const userStore = useUserStore();
const toast = useToast();
const registerUseCase = new RegisterUser(new AuthRepositoryImpl());

const onSubmit = async () => {
  stateStore.setLoading(true);
  toast.info('Submitting account information...');
  try{
    const response = await registerUseCase.execute(registerStore.getRegisterData);
    authStore.setToken(response.token);
    authStore.setPersonId(response.user.person_id);
    userStore.setUser(response.user);
    registerStore.clearRegister();
    toast.clear();
    toast.success('Account created successfully!');
    router.push({ name: 'dashboard' });
  }
  catch(error) {
    stateStore.setError(error.message || 'Error al crear la cuenta');
  }
  finally {
    stateStore.setLoading(false);
  }
};

</script>
<template>
  <form @submit.prevent class="h-[150px] flex flex-col gap-4">
    <TextInput
      placeholder="Nombre de usuario"
      :model="registerStore.username"
      @update:model="registerStore.setUsername($event)"
      :disabled="stateStore.isLoading"
    />

    <PasswordInput
      placeholder="Contraseña"
      :model="registerStore.password"
      @update:model="registerStore.setPassword($event)"
      :disabled="stateStore.isLoading"
    />

    <FilledButton
      text="Crear cuenta"
      type="submit"
      :onPressed="onSubmit"
      :disabled="stateStore.isLoading"
    />
  </form>
</template>