<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a Server</p>
        <hr>
        <button @click="resetStatus">Change to Normal</button>
    </div>

</template>

<script>
    import {serverBus} from '../../main.js';

    export default {
        data: function () {
            return{
                server: null
            };
        },
        methods: {
          resetStatus(){
              this.server.status = 'Normal'
          }
        },
        created() {
            serverBus.$on('serverSelected', (server) => {
                this.server = server;
            });
        }
    }
</script>

<style>

</style>
