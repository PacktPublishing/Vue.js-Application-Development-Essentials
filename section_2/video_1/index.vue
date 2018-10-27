<template>
    <div id="app">
        Hello World
    </div>
</template>

<script>
    import Vue from 'vue';
    // simple object with data
    var data = {name: 'john', age: null}
    // creating new app with data object
    var vm = new Vue({
        el: "#app",
        data: data
    });
    console.log(vm.name)
    // changing age property
    data.age = 27
    // creating watcher for name property
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
