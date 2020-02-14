/* Import modules. */
import Vue from 'vue'

/* Import test utilities. */
import { shallowMount } from '@vue/test-utils'

/* Import view. */
import Dashboard from '@/views/Dashboard.vue'

/* Describe test. */
describe('Dashboard.vue', () => {
    /* Initialize wrapper. */
    const wrapper = shallowMount(Dashboard)

    it('is a registered component', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    // it('is app title present', () => {
    //     expect(wrapper.find('h1').text()).toBe('Nito.cash')
    // })

    // it('is app slogan present', () => {
    //     expect(wrapper.find('h2').text()).toBe('Hush Your Money™')
    // })

    // it('is index initialized', () => {
    //     expect(wrapper.vm.index).toBeDefined()
    // })

    // it('is frame initialized', () => {
    //     expect(wrapper.vm.frame).toBeDefined()
    // })
})
