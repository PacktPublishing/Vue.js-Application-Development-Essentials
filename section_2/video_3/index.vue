<template>
    <div id="app">
        {{helloReversed}}

        {{helloReversed}}

        {{helloReversed}}
        <button v-on:click="counter++">increment</button>
        {{counter}}
    </div>
</template>

<script>

    export default {
        name: "App",
        data: function () {
            return {
                counter: 0,
                hello: "Hello World"
            }
        },
        computed: {
            helloReversed: function () {
                return this.hello.split("").reverse().join("")
            }
        },
        watch: {
            counter: function (newValue, oldValue) {
                console.log(newValue)
                if (newValue === 5) {
                    console.log("yeah")
                }
            }
        }
    };

</script>

