import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import HomeVue from './Home.vue'

describe('Tela Home', () => {
  it('Espera-se que a tela seja renderizada', () => {
    const wrapper = mount(HomeVue)
    expect(wrapper.exists()).toBe(true)
  })
})
