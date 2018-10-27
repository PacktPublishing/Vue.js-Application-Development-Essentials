<template>
    <div id="app">
        <!-- creating app-counter component, <app-counter /> -->
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
    // app-counter component implementation
    Vue.component('app-counter', {
        data: function () {
            return {
                value: 0
            }
        },
        // increasing value when click
        template: '<button v-on:click="value++">{{ value }}</button>'
    })

</script>

