<template>
    <div class="row">
        <app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">{{quote}}</app-quote>
    </div>
</template>


<style>

</style>

<script>
    import Quote from './Quote.vue';
    export default {
        props: ['quotes'],
        components: {
          appQuote: Quote
        },
        methods: {
            deleteQuote(index) {
                this.$emit('quoteDeleted', index);
            }
        }

    }

</script>