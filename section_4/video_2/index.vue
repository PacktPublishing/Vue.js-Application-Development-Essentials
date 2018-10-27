<template>
    <div id="app">
        <!-- adding addANumber method handler to click event -->
        <button v-on:click="addANumber">add a number</button>
        <!-- adding reverseNumbers method handler to click event -->
        <button v-on:click="reverseNumbers">reverse numbers</button>
        <!-- creating transition-group component with attributes -->
        <transition-group name="mytransition">
            <!-- iterating over numbers and creating span element -->
            <span v-for="number in numbers" v-bind:key="number" class="item">{{number}}</span>
        </transition-group>
    </div>
</template>

<script>
    import Vue from "vue";

    export default {
        name: "App",
        data: function () {
            return {
                numbers: []
            }
        },
        methods: {
            addANumber: function () {
                // adding random parsed number to the numbers array
                this.numbers.push(parseInt(Math.random() * 80))
            },
            reverseNumbers: function () {
                // reversing numbers array
                this.numbers.reverse();
            }
        }
    };

</script>

<style>
    .mytransition-enter-active, .mytransition-leave-active {
        transition: opacity .5s;
    }

    .mytransition-enter, .mytransition-leave-to {
        opacity: 0;
    }

    .mytransition-move {
        transition: transform 1s;
    }

    .item {
        display: inline-block;
        padding: 10px;
    }
</style>


