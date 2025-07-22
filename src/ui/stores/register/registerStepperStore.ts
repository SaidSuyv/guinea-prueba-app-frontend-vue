import { defineStore } from "pinia";

export const useRegisterStepperStore = defineStore('registerStepper', {
  state: () => ({
    currentStep: 0,
    previousStep: 0,
    allSteps: 2,
    transitionName: 'slide-left',
  }),
  actions: {
    nextStep() {
      if (this.currentStep < this.allSteps) {
        this.previousStep = this.currentStep;
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.previousStep = this.currentStep;
        this.currentStep--;
      }
    },
    resetSteps() {
      this.currentStep = 0;
      this.previousStep = 0;
    },
  },
  getters: {
    getTransitionName: (state) => state.currentStep > state.previousStep ? 'slide-left' : 'slide-right',
  },
});