import {shallowMount} from '@vue/test-utils'
import Authorization from '@/components/Authorization.vue'

describe('Authorization.vue', () => {
    it('should render props.username', () => {
        const username = 'Bart'
        const wrapper = shallowMount(Authorization, {
            propsData: {username}
        })

        expect(wrapper.find('.username').text().trim()).toMatch(username)
    })

    it('should set data.password', () => {
        const wrapper = shallowMount(Authorization)
        wrapper.setData({password: '1234'})
        expect(wrapper.find('.error').exists()).toBe(true)

        wrapper.setData({password: '1234567'})
        expect(wrapper.find('.error').exists()).toBe(false)
    })
})
