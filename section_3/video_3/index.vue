<template>
    <div id="app">
        <!-- creating app-counter component and passing initialValue attribute -->
        <app-counter initialValue=2></app-counter>
        <app-counter></app-counter>
        <app-counter></app-counter>
        {{ number }}
        <!-- increasing number data on keyup event  -->
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
    // app-counter component implementation
    Vue.component('app-counter', {
        props: ['initialValue'],
        data: function () {
            return {
                value: 0
            }
        },
        methods: {
            count: function (initialValue, event) {
                // increasing value with parsed initial value
                this.value += parseInt(initialValue);
                console.log(event)
            }
        },
        // adding count event handler and passing initialValue and $event on click handler
        template: '<button v-on:click.once="count(initialValue, $event)">{{ value }}</button>'
    })

</script>

