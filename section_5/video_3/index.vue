<template>
    <div id="app">
        <!-- adding changeState method handler to click event -->
        <button v-on:click="changeState">change state</button>
        <!-- adding clearState method handler to click event -->
        <button v-on:click="clearState">clear state</button>
        <div>
            <componentA/>
            <componentB/>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    // componentA component implementation
    Vue.component("componentA", {
        data: function () {
            return {
                privateData: {},
                // setting shareData to global store state
                sharedData: store.state
            }
        },
        template: "<div>{{ sharedData.user }}</div>"
    });
    // componentA component implementation
    Vue.component("componentB", {
        data: function () {
            return {
                privateData: {},
                // setting shareData to global store state
                sharedData: store.state
            }
        },
        template: "<div>{{ sharedData.user }}</div>"
    });
    // creating store object
    const store = {
        state: {
            user: "Bart"
        },
        // actions
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
                // invoking store setUserAction
                store.setUserAction("John");
            },
            clearState: function () {
                // invoking store clearUserAction
                store.clearUserAction();
            }
        }
    };

</script>

<style>

</style>
