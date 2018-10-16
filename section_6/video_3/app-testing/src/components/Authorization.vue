<template>
    <div>
        <div class="username">{{username}}</div>
        <div v-if="error" class="error">error</div>
    </div>
</template>

<script>
    export default {
        name: 'Authorization',
        props: ['username'],
        data: function () {
            return {
                password: ''
            }
        },
        computed: {
            error: function () {
                return this.password.length < 6
            }
        }
    }
</script>

<style scoped>

</style>
