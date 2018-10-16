<template>
    <div id="app">
        Hello World
    </div>
</template>

<script>
    import Vue from 'vue';

    var data = {name: 'john', age: null}
    var vm = new Vue({
        el: "#app",
        data: data
    });
    console.log(vm.name)

    data.age = 27
    vm.$watch('name', function (newVal) {
        console.log(newVal)
    })

    export default vm;
</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
