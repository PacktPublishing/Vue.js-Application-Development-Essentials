<template>
    <div id="app">
        <div>
            <!-- adding toggleShow method handler on click event -->
            <button v-on:click="toggleShow">toggle show</button>
            <!-- adding changeTransition method handler and passing fade value on click event -->
            <button v-on:click="changeTransition('fade')">fade</button>
            <!-- adding changeTransition method handler and passing fade-slow value on click event -->
            <button v-on:click="changeTransition('fade-slow')">fade-slow</button>
            <!-- adding changeTransition method handler and passing fade-superslow' value on click event -->
            <button v-on:click="changeTransition('fade-superslow')">fade-superslow</button>
        </div>
        <!-- creating app transition component and passing transitionName and show attributes via v-bind -->
        <app-transition v-bind:name="transitionName" v-bind:show="show"/>
    </div>
</template>

<script>
    import Vue from "vue";
    // app-transition component implementation
    Vue.component("app-transition", {
        props: ["name", "show"],
        // creating transition component with attributes
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
                // setting name to transitionName app data
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


