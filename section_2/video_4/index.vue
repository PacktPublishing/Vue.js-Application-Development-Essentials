<template>
    <div id="app">
        <app-header title="header title">
            <p>some text</p>
        </app-header>

        <article>
            <app-header title="article title"/>
            <local-component/>
        </article>
        <app-players v-bind:players="players"/>
    </div>
</template>

<script>
    import Vue from "vue";

    Vue.component("app-header", {
        props: ["title"],
        template: "<div>{{title}}: <slot></slot></div>"
    });

    var localComponent = {
        template: "<div>local component</div>"
    };

    Vue.component("app-players", {
        props: ["players"],
        template: "<div><ul><li v-for='player in players'><app-player v-bind:name='player.name' /></li></ul></div>"
    });

    Vue.component("app-player", {
        props: ["name"],
        template: "<div>{{name}}</div>"
    })

    export default {
        name: "App",
        data: function () {
            return {
                players: [{name: "Bart"}, {name: "Joe"}]
            }
        },
        components: {
            'local-component': localComponent
        },
        created: function () {
            console.log("created state");
        },
        mounted: function () {
            console.log("mounted state");
        }
    };

</script>

