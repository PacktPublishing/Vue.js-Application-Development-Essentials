<template>
    <div id='app'>
        <!--  v-bind:id='myId' - binding myId data with the span id, {{hello}} - interpolation  -->
        <span v-bind:id='myId' v-once>{{hello}}</span>
        <!-- setting button to disabled -->
        <button v-bind:disabled='true'>button disabled</button>
        <!-- increasing number with 2 via interpolation -->
        <span>{{ number + 2 }}</span>
        <!-- if else statements -->
        <p v-if='userExist'>user exist</p>
        <p v-else-if='number == 2'>user not exist</p> <a v-bind:href='href'>link</a><a :href='href'>short syntax
        link</a>
        <!-- adding event handler to the click event -->
        <div v-on:click='onClickMethod'>click</div>
        <!-- shortcut for v-on -->
        <div @click='onClickMethod'>short syntax click</div>
        <!-- v-for statements -->
        <div v-for='person in persons'>
            <div>{{ person.name }}</div>
        </div>
        <div v-for='prop in player'>
            <div>{{ prop }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                userExist: false,
                number: 1,
                myId: 'id2',
                hello: 'Hello World',
                persons: [
                    {
                        name: 'Bart'
                    },
                    {
                        name: 'Joe'
                    }],
                player: {
                    name: 'Bart',
                    age: 27,
                    hobby: 'football'
                }
            }
        },
        methods: {
            onClickMethod: function () {
                //onCLick method
            }
        }
    }
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
