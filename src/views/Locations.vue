<template>
  <div class="locations">
    <h1>Locations</h1>
    <h2>Nepomuki Szent János Templom</h2>
    <Map query="Anna+Tanya,Törökbálint" />
    <h2>Anna Tanya</h2>
    <Map query="Nepomuki+Szent+János+Templom,Budaörs" />
  </div>
</template>

<script>
import Map from '@/components/Map.vue'

export default {
  name: 'Locations',
  components: {
    Map
  }
}
</script>

<style scoped>
.map {
  width: 500px;
  height: 400px;
}
</style>
