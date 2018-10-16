<template>
    <div id="app">
        <app-counter></app-counter>
    </div>
</template>

<script>
    import Vue from 'vue';

    export default {
        name: "App",
        data: function () {
            return {}
        }
    };

    Vue.component('app-counter', {
        data: function () {
            return {
                value: 0
            }
        },
        template: '<button v-on:click="value++">{{ value }}</button>'
    })

</script>

