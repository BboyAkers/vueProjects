<template>

            <li class="list-group-item"
            style="cursor: pointer"
            @click="serverSelected">
                Server #{{server.id}}
            </li>
</template>

<script>
    import {serverBus} from '../../main.js';

    export default {
        props: ['server'],
        methods: {
            serverSelected(){
                this.serverBus.$emit('serverSelected', this.id);
            }
        }
    }
</script>

<style>

</style>
