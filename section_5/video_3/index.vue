<template>
    <div id="app">
        <button v-on:click="changeState">change state</button>
        <button v-on:click="clearState">clear state</button>
        <div>
            <componentA/>
            <componentB/>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';

    Vue.component("componentA", {
        data: function () {
            return {
                privateData: {},
                sharedData: store.state
            }
        },
        template: "<div>{{ sharedData.user }}</div>"
    });

    Vue.component("componentB", {
        data: function () {
            return {
                privateData: {},
                sharedData: store.state
            }
        },
        template: "<div>{{ sharedData.user }}</div>"
    });

    const store = {
        state: {
            user: "Bart"
        },
        setUserAction: function (newVal) {
            this.state.user = newVal
        },
        clearUserAction: function () {
            this.state.user = ''
        }
    }

    export default {
        name: "App",
        methods: {
            changeState: function () {
                store.setUserAction("John");
            },
            clearState: function () {
                store.clearUserAction();
            }
        }
    };

</script>

<style>

</style>
