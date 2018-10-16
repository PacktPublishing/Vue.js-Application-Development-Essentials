import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import TodoList from '@/components/TodoList.vue'

describe('TodoList.vue', () => {
    it('should create new Todo', () => {
        const wrapper = mount(TodoList)
        wrapper.setData({
            form: {
                newTodoText: 'read a book'
            }
        })

        wrapper.find('#form').trigger('submit')
        const todos = wrapper.vm.$data.todos
        expect(todos.length).to.equal(1)
    })

    it('should remove Todo', () => {
        const wrapper = mount(TodoList)
        wrapper.setData({
            form: {
                newTodoText: 'read a book'
            }
        })

        wrapper.find('#form').trigger('submit')
        wrapper.find('.todoRemove').trigger('click')
        const todos = wrapper.vm.$data.todos
        expect(todos.length).to.equal(0)
    })

    it('should change Todo status', () => {
        const wrapper = mount(TodoList)
        wrapper.setData({
            form: {
                newTodoText: 'read a book'
            }
        })

        wrapper.find('#form').trigger('submit')
        wrapper.find('.todoChangeStatus').trigger('click')
        const todo = wrapper.vm.$data.todos[0]
        expect(todo.status).contains('completed')
    })
})
