<template>
    <div id="app">
        <div>
            <router-link to="/home">HOME</router-link>
            <router-link to="/about">ABOUT</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueRouter from 'vue-router'

    Vue.use(VueRouter)

    const Home = {template: '<div>Home PAGE</div>'}
    const About = {template: '<div>ABOUT PAGE</div>'}

    const routes = [
        {path: '/home', component: Home},
        {path: '/about', component: About}
    ]

    const router = new VueRouter({
        routes: routes
    });

    export default {
        name: "App",
        router
    };
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
