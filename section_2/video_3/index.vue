<template>
    <div id="app">
        <!-- displaying helloReversed via interpolation -->
        {{helloReversed}}

        {{helloReversed}}

        {{helloReversed}}
        <!-- invoking counter++ when click -->
        <button v-on:click="counter++">increment</button>
        <!-- displaying counter data with interpolation -->
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
        // computed methods
        computed: {
            helloReversed: function () {
                // splitting into array then reversing an array and joining into string
                return this.hello.split("").reverse().join("")
            }
        },
        // watch methods
        watch: {
            counter: function (newValue, oldValue) {
                console.log(newValue)
                // logging "yeah" string when counter value is equal to 5
                if (newValue === 5) {
                    console.log("yeah")
                }
            }
        }
    };

</script>

