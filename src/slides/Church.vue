<template>
  <div id="church" class="slide location">
    <h2>Nepomuki Szent János Templom</h2>
    <Map query="Nepomuki+Szent+János+Templom,Budaörs" />
  </div>
</template>

<script>
import Map from '@/components/Map.vue'

export default {
  name: 'Church',
  components: {
    Map
  }
}
</script>

<style scoped>
.location > div {
  display: inline-block;
  width: 50%;
  height: 100%;
}

.map {
  width: 90%;
  height: 70%;

  margin-top: 3%;
}
</style>
