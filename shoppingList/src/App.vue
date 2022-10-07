<script setup lang="ts">
import { ref } from 'vue';

const header = ref('Shopping List App');
const items = ref([
  {
    id: 1,
    name: 'Milk',
    quantity: 2,
  },
  {
    id: 2,
    name: 'Bread',
    quantity: 1,
  },
  {
    id: 3,
    name: 'Eggs',
    quantity: 12,
  },
]);
</script>

<template>
  <header>
    <h1>{{ header }}</h1>
  </header>

  <main>
    <input type="text" placeholder="Add an item..." />
    <ul>
      <li v-for="{ id, name } in items" :key="id">{{ name }}</li>
    </ul>
  </main>
</template>
