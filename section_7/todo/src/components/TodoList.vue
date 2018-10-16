<template>
    <div>
        <bForm id="form" @submit.prevent="addTodo">
            <bFormGroup
                    label="Create new Todo:"
                    label-for="todoInput"
                    description="Enter the title"
            >
                <bFormInput
                        id="todoInput"
                        v-model="form.newTodoText"
                        placeholder="Title"
                ></bFormInput>
            </bFormGroup>
        </bForm>
        <bListGroup v-if="todos.length">
            <TodoListItem
                    v-for="todo in todos"
                    :key="todo.id"
                    :todo="todo"
                    @remove="removeTodo"
                    @changeStatus="changeTodoStatus"
            />
        </bListGroup>
        <bAlert v-else show variant="warning">
            empty TODO list
        </bAlert>
    </div>
</template>

<script>
    import bForm from 'bootstrap-vue/es/components/form/form'
    import bFormGroup from 'bootstrap-vue/es/components/form-group/form-group'
    import bFormInput from 'bootstrap-vue/es/components/form-input/form-input'
    import bListGroup from 'bootstrap-vue/es/components/list-group/list-group'
    import bAlert from 'bootstrap-vue/es/components/alert/alert'
    import TodoListItem from './TodoListItem.vue'

    let todoId = 1

    export default {
        components: {
            bForm, bFormGroup, bFormInput, bListGroup, bAlert, TodoListItem
        },
        data() {
            return {
                form: {},
                todos: []
            }
        },
        methods: {
            addTodo() {
                const trimmedText = this.form.newTodoText.trim()
                if (trimmedText) {
                    this.todos.push({
                        id: todoId++,
                        text: trimmedText,
                        status: ''
                    })
                    this.form.newTodoText = ''
                }
            },
            removeTodo(id) {
                this.todos = this.todos.filter(todo => todo.id !== id)
            },
            changeTodoStatus(id, status) {
                this.todos = this.todos.map(todo => {
                    return {
                        ...todo,
                        status: todo.id === id ? status : todo.status
                    }
                })
            }
        }
    }
</script>
