<template>
    <button v-on:click="onClick">{{text}}</button>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Button extends Vue {
        @Prop() private text!: string;

        onClick(): void {
            console.log('CLICKED')
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
