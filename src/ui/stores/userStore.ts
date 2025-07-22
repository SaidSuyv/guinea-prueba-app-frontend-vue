import { defineStore } from "pinia";
import type { UserEntity } from "../../domain/entities/userEntity";

export const useUserStore = defineStore('user', {
  state: ():UserEntity => ({
    person_id: null,
    name: localStorage.getItem("APP_USER_NAME") || null,
    lastname: localStorage.getItem("APP_USER_LASTNAME") || null,
    email: localStorage.getItem("APP_USER_EMAIL") || null,
  }),
  actions: {
    setUser(user:UserEntity) {
      this.person_id = user.person_id;
      this.name = user.name;
      this.lastname = user.lastname;
      this.email = user.email;

      localStorage.setItem("APP_USER_NAME", user.name!);
      localStorage.setItem("APP_USER_LASTNAME", user.lastname!);
      localStorage.setItem("APP_USER_EMAIL", user.email!);
    },
    clearUser() {
      this.person_id = null;
      this.name = null;
      this.lastname = null;
      this.email = null;

      localStorage.removeItem("APP_USER_NAME");
      localStorage.removeItem("APP_USER_LASTNAME");
      localStorage.removeItem("APP_USER_EMAIL");
    }
  },
  getters: {
    getPersonId: (state) => state.person_id,
    getFullName: (state) => `${state.name || ''} ${state.lastname || ''}`.trim(),
    getEmail: (state) => state.email || '',
  }
});