import type { RegisterEntity } from "@/domain/entities/register/registerEntity";
import { defineStore } from "pinia";

export const useRegisterStore = defineStore('register', {
  state: ():RegisterEntity => ({
    name: null,
    lastname: null,
    email: null,
    gender: null,
    birthdate: null,
    username: null,
    password: null,
  }),
  actions: {
    setName(name: string) {
      this.name = name;
    },
    setLastname(lastname: string) {
      this.lastname = lastname;
    },
    setEmail(email: string) {
      this.email = email;
    },
    setGender(gender: string) {
      this.gender = gender;
    },
    setBirthdate(birthdate: string) {
      this.birthdate = birthdate;
    },
    setUsername(username: string) {
      this.username = username;
    },
    setPassword(password: string) {
      this.password = password;
    },
    clearRegister() {
      this.name = null;
      this.lastname = null;
      this.email = null;
      this.gender = null;
      this.birthdate = null;
      this.username = null;
      this.password = null;
    }
  },
  getters: {
    getName: (state) => state.name,
    getLastname: (state) => state.lastname,
    getEmail: (state) => state.email,
    getGender: (state) => state.gender,
    getBirthdate: (state) => state.birthdate,
    getUsername: (state) => state.username,
    getPassword: (state) => state.password,
    getRegisterData: (state) => ({
      name: state.name,
      lastname: state.lastname,
      email: state.email,
      gender: state.gender,
      birthdate: state.birthdate,
      username: state.username,
      password: state.password,
    }),
  }
});