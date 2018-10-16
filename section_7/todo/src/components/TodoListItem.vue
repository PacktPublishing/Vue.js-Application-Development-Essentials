<template>
    <div>
        <bListGroupItem :variant="todo.status === 'completed' ? 'success' : ''"
                        class="d-flex justify-content-between align-items-center">
            {{todo.text}}
            <bButtonGroup>
                <bButton variant="danger" @click="$emit('remove', todo.id)" class="todoRemove">
                    remove
                </bButton>
                <bButton variant="primary" @click="$emit('changeStatus', todo.id, 'completed')"
                         class="todoChangeStatus">
                    mark as completed
                </bButton>
            </bButtonGroup>
        </bListGroupItem>
    </div>
</template>

<script>
    import bListGroupItem from 'bootstrap-vue/es/components/list-group/list-group-item'
    import bButtonGroup from 'bootstrap-vue/es/components/button-group/button-group'
    import bButton from 'bootstrap-vue/es/components/button/button'

    export default {
        components: {
            bListGroupItem,
            bButtonGroup,
            bButton
        },
        props: ['todo']
    }
</script>
