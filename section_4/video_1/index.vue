<template>
    <div id="app">
        <!-- adding toggleShow handler on click event -->
        <button v-on:click="toggleShow">toggle show</button>
        <!-- creating transition component with attributes -->
        <transition appear name="mytransition">
            <!-- displaying app-home component if show data is true -->
            <app-home v-if="show" key="my-transition-key"/>
            <!-- displaying app-about component if show data is false -->
            <app-about v-else key="my-hello-key"/>
        </transition>
        <br>
        <!-- creating transition component with attributes -->
        <transition appear name="myanimation" enter-class="myClass">
            <!-- displaying p element when show data is true -->
            <p v-if="show">Hello animation</p>
        </transition>
    </div>
</template>

<script>
    import Vue from "vue";
    // app-home component implementation
    Vue.component("app-home", {
        template: "<div>home</div>"
    })
    // app-home component implementation
    Vue.component("app-about", {
        template: "<div>about</div>"
    })

    export default {
        name: "App",
        data: function () {
            return {
                show: true
            }
        },
        methods: {
            toggleShow: function () {
                this.show = !this.show;
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

    .myanimation-enter-active {
        animation: bounce-in .5s;
    }

    .myanimation-leave-active {
        animation: bounce-in .5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }

        50% {
            transform: scale(1.2);
        }

        100% {
            transform: scale(1);
        }
    }
</style>


