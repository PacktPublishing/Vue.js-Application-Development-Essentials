<template>
    <div id="app">
        <!-- creating app-header component with title attribute -->
        <app-header title="header title">
            <p>some text</p>
        </app-header>

        <article>
            <app-header title="article title"/>
            <local-component/>
        </article>
        <!-- creating app-players component with players attributes passed via v-bind -->
        <app-players v-bind:players="players"/>
    </div>
</template>

<script>
    import Vue from "vue";
    // app-header component implementation
    Vue.component("app-header", {
        props: ["title"],
        template: "<div>{{title}}: <slot></slot></div>"
    });
    // localComponent object implementation
    var localComponent = {
        template: "<div>local component</div>"
    };
    // app-players component implementation
    Vue.component("app-players", {
        props: ["players"],
        // iterating over players array, create app-player component and pass name attribute via v-bind
        template: "<div><ul><li v-for='player in players'><app-player v-bind:name='player.name' /></li></ul></div>"
    });
    // app-player component implementation
    Vue.component("app-player", {
        props: ["name"],
        // display name with interpolation
        template: "<div>{{name}}</div>"
    })

    export default {
        name: "App",
        data: function () {
            return {
                players: [{name: "Bart"}, {name: "Joe"}]
            }
        },
        // register local-component
        components: {
            'local-component': localComponent
        },
        // lifecycle hooks
        created: function () {
            console.log("created state");
        },
        mounted: function () {
            console.log("mounted state");
        }
    };

</script>

