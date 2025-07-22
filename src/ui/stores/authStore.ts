import { defineStore } from 'pinia';
import type { AuthEntity } from '../../domain/entities/auth/authEntity';

export const useAuthStore = defineStore('auth', {
  state: ():AuthEntity => ({
    token: localStorage.getItem('APP_TOKEN') || null,
    person_id: null,
  }),
  actions: {
    setToken(token: string) {
      this.token = token;
      localStorage.setItem("APP_TOKEN", token);
    },
    setPersonId(person_id: number) {
      this.person_id = person_id;
    },
    clearAuth() {
      this.token = null;
      this.person_id = null;

      localStorage.removeItem("APP_TOKEN");
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    getToken: (state) => state.token || '',
    getPersonId: (state) => state.person_id,
  }
});