<template>
    <div id="app">
        <button v-on:click="toggleShow">toggle show</button>
        <transition appear name="mytransition">
            <app-home v-if="show" key="my-transition-key"/>
            <app-about v-else key="my-hello-key"/>
        </transition>
        <br>
        <transition appear name="myanimation" enter-class="myClass">
            <p v-if="show">Hello animation</p>
        </transition>
    </div>
</template>

<script>
    import Vue from "vue";

    Vue.component("app-home", {
        template: "<div>home</div>"
    })

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


