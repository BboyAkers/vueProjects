<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="index in servers">
                Server #{{index.id}} {{index.status}}
                <button @click="checkServer">Check</button>
            </li>
        </ul>


    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unknown'},
                    {id: 4, status: 'Normal'}
                ]
            };
        },
        methods: {
            checkServer(){

            },
        },
        created() {

        }
    }
</script>

<style>

</style>
