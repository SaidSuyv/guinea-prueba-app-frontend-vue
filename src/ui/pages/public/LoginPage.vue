<script setup>
import vueImage from '@/assets/images/guinea_logo.webp';
import { AuthRepositoryImpl } from '@/infrastructure/repositories/authRepository';
import { useStateStore } from '@/ui/stores/stateStore';
import FilledButton from '@/ui/components/buttons/FilledButton.vue';
import PasswordInput from '@/ui/components/inputs/PasswordInput.vue';
import TextInput from '@/ui/components/inputs/TextInput.vue';
import { ref } from 'vue';
import { LoginUser } from '@/application/use-cases/LoginUser';
import { useAuthStore } from '@/ui/stores/authStore';
import { useUserStore } from '@/ui/stores/userStore';
import router from '@/ui/router';

const loginUseCase = new LoginUser(new AuthRepositoryImpl());

const stateStore = useStateStore();
const authStore = useAuthStore();
const userStore = useUserStore();

const loginData = ref({
  username: '',
  password: ''
});

const onSubmit = async () => {

  stateStore.setLoading(true);

  try {
    const response = await loginUseCase.execute(loginData.value);
    authStore.setToken(response.token);
    authStore.setPersonId(response.user.person_id);
    userStore.setUser(response.user);
    console.log('Login successful:', response);
    router.push({name:'dashboard'});
  } catch (error) {
    stateStore.setError(error.message || 'Error al iniciar sesión');
  }
  finally {
    stateStore.setLoading(false);
  }
};

</script>
<template>
  <div class="bg h-full flex items-center justify-center">
    <div class="bg-white h-full xs:h-fit w-full xs:max-w-[400px] xs:rounded-3xl shadow-md p-5 xs:p-10 border-[1px] border-gray-200 flex flex-col items-center justify-center">
      <div class="mb-10 flex flex-col items-center">
        <img :src="vueImage" alt="Guinea's logo" class="max-w-[250px]" />
        <p class="text-center text-sm opacity-50">Prueba técnica</p>
      </div>
      <form @submit.prevent class="mb-10 flex flex-col gap-4">
        <TextInput
          :model="loginData.username"
          @update:model="loginData.username = $event"
          placeholder="Nombre de usuario"
          :disabled="stateStore.isLoading"
        />
        <PasswordInput
          :model="loginData.password"
          @update:model="loginData.password = $event"
          placeholder="Contraseña"
          :disabled="stateStore.isLoading"
        />
        <FilledButton
          type="submit"
          text="Iniciar sesión"
          :onPressed="onSubmit"
          :disabled="stateStore.isLoading"
        />
      </form>
      <div class="text-center text-sm">
        <router-link to="/register">
          <p class="text-primary font-extrabold hover:underline m-0">¿No tienes cuenta? Regístrate</p>
        </router-link>
        <p class="text-gray-400 opacity-60 mt-4 mb-0">Hecho por Said Suybate Vidal</p>
      </div>
    </div>
  </div>
</template>