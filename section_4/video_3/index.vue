<template>
    <div id="app">
        <div>
            <button v-on:click="toggleShow">toggle show</button>
            <button v-on:click="changeTransition('fade')">fade</button>
            <button v-on:click="changeTransition('fade-slow')">fade-slow</button>
            <button v-on:click="changeTransition('fade-superslow')">fade-superslow</button>
        </div>
        <app-transition v-bind:name="transitionName" v-bind:show="show"/>
    </div>
</template>

<script>
    import Vue from "vue";

    Vue.component("app-transition", {
        props: ["name", "show"],
        template: "<transition v-if='show' v-bind:name='name'><span>{{name}}</span></transition>"
    });


    export default {
        name: "App",
        data: function () {
            return {
                show: true,
                transitionName: 'fade'
            }
        },
        methods: {
            toggleShow: function () {
                this.show = !this.show
            },
            changeTransition: function (name) {
                this.transitionName = name;
            }
        }
    };

</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .fade-slow-enter-active, .fade-slow-leave-active {
        transition: opacity 5s;
    }

    .fade-slow-enter, .fade-slow-leave-to {
        opacity: 0;
    }

    .fade-superslow-enter-active, .fade-superslow-leave-active {
        transition: opacity 10s;
    }

    .fade-superslow-enter, .fade-superslow-leave-to {
        opacity: 0;
    }
</style>


