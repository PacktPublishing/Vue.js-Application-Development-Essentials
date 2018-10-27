<template>
    <div id="app">
        <div>
            <!-- creating router-link components with links -->
            <router-link to="/home">HOME</router-link>
            <router-link to="/about">ABOUT</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueRouter from 'vue-router'

    // adding VueRouter to Vue as a plugin
    Vue.use(VueRouter)

    // creating Home and About components
    const Home = {template: '<div>Home PAGE</div>'}
    const About = {template: '<div>ABOUT PAGE</div>'}

    // setting up the routes
    const routes = [
        {path: '/home', component: Home},
        {path: '/about', component: About}
    ]

    // creating a router and passing routes
    const router = new VueRouter({
        routes: routes
    });

    // adding router to the app as a property
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
