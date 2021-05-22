<template>
  <div id="party" class="slide location">
    <h2>Anna Tanya</h2>
    <Map query="Anna+Tanya,Törökbálint" />
  </div>
</template>

<script>
import Map from '@/components/Map.vue'

export default {
  name: 'Party',
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
