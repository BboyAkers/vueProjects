<template>
  <div>
    <p>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</p>
    <button @click="increaseCapacity()">Increase Capacity</button>
    <ul>
      <li v-for="(name, index) in attending" :key="index">
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<script>
import useEventSpace from '@/use/event-space'
export default {
  setup() {
    const {
      capacity,
      attending,
      spacesLeft,
      increaseCapacity,
    } = useEventSpace()
    return { capacity, attending, spacesLeft, increaseCapacity }
  },
}
</script>
