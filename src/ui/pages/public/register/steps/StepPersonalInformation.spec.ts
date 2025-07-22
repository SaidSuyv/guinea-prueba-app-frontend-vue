import { shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import StepPersonalInformation from './StepPersonalInformation.vue';

vi.mock('@/ui/stores/register/registerStore', () => ({
  useRegisterStore: () => ({
    name: '',
    lastname: '',
    email: '',
    gender: '',
    birthdate: '',
    setName: vi.fn(),
    setLastname: vi.fn(),
    setEmail: vi.fn(),
    setGender: vi.fn(),
    setBirthdate: vi.fn()
  })
}))

const nextStepMock = vi.fn()

vi.mock('@/ui/stores/register/registerStepperStore', () => ({
  useRegisterStepperStore: () => ({
    nextStep: nextStepMock
  })
}))

describe('StepPersonalInformation.vue', () => {
  it('renderiza todos los inputs y el boton', () => {
    const wrapper = shallowMount(StepPersonalInformation)
    expect(wrapper.findAllComponents({name: 'TextInput'})).toHaveLength(3)
    expect(wrapper.findComponent({ name: 'SelectInput'}).exists()).toBe(true)
    expect(wrapper.findComponent({name: 'DateInput'}).exists()).toBe(true)
    expect(wrapper.findComponent({name: 'FilledButton'}).exists()).toBe(true)
  })

  it('llama a nextStep cuando se presiona el boton', async () => {
    const wrapper = shallowMount(StepPersonalInformation)
    const button = wrapper.findComponent({ name: 'FilledButton' })
    await button.vm.onPressed()
    expect(nextStepMock).toHaveBeenCalled()
  })
});