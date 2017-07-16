<template>
    <div class="row">
        <app-quote v-for="quote in quotes">{{quote}}</app-quote>
    </div>
</template>


<style>

</style>

<script>
    import Quote from './Quote.vue';
    export default {
        components: {
          appQuote: Quote
        },
        props: ['quotes']
    }

</script>