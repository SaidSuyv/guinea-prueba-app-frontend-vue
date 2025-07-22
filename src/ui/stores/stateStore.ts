import type { StateEntity } from "@/domain/entities/stateEntity";
import { defineStore } from "pinia";

export const useStateStore = defineStore('state', {
  state: ():StateEntity => ({
    isLoading: false,
    error: null,
  }),
  actions: {
    setLoading(loading: boolean) {
      this.isLoading = loading;
    },
    setError(error: string | null) {
      this.isLoading = false;
      this.error = error;
    },
    clearState() {
      this.isLoading = false;
      this.error = null;
    }
  },
  getters: {
    getIsLoading: (state) => state.isLoading,
    getError: (state) => state.error,
  }
});