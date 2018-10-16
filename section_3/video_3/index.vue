<template>
    <div id="app">
        <app-counter initialValue=2></app-counter>
        <app-counter></app-counter>
        <app-counter></app-counter>
        {{ number }}
        <input type="text" v-on:keyup.up="number++">
    </div>
</template>

<script>
    import Vue from 'vue';

    export default {
        name: "App",
        data: function () {
            return {
                number: 0
            }
        }
    };

    Vue.component('app-counter', {
        props: ['initialValue'],
        data: function () {
            return {
                value: 0
            }
        },
        methods: {
            count: function (initialValue, event) {
                this.value += parseInt(initialValue);
                console.log(event)
            }
        },
        template: '<button v-on:click.once="count(initialValue, $event)">{{ value }}</button>'
    })

</script>

