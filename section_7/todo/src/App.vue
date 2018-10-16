<template>
    <div id="app">
        <TogoList/>
    </div>
</template>

<script>
    import TogoList from './components/TodoList.vue'

    export default {
        name: 'app',
        components: {
            TogoList
        }
    }
</script>

<style>
    #app {
        max-width: 700px;
        margin: auto;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
