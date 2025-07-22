<script setup>
import { LogoutUser } from '@/application/use-cases/LogoutUser';
import { AuthRepositoryImpl } from '@/infrastructure/repositories/authRepository';
import FilledButton from '@/ui/components/buttons/FilledButton.vue';
import router from '@/ui/router';
import { useAuthStore } from '@/ui/stores/authStore';
import { useUserStore } from '@/ui/stores/userStore';

const logoutUseCase = new LogoutUser(new AuthRepositoryImpl());

const authStore = useAuthStore();
const userStore = useUserStore();

const onLogout = async () => {
  await logoutUseCase.execute();
  authStore.clearAuth();
  userStore.clearUser();
  router.go({name: 'login'});
}

</script>
<template>
  <div class="bg-white border-[1px] border-gray-200 rounded-xl p-4 flex flex-col gap-4">
    <p class="text-xl font-extrabold">Cuenta</p>
    <FilledButton
      text="Cerrar sesión"
      class="md:max-w-1/3"
      :onPressed="onLogout"
    />
  </div>
</template>