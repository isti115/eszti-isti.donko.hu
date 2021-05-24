<template>
  <div id="church" class="slide location">
    <GoHome />
    <h2>Nepomuki Szent János Templom</h2>
    <Map query="Nepomuki+Szent+János+Templom,Budaörs" />
  </div>
</template>

<script>
import GoHome from '@/components/GoHome.vue'
import Map from '@/components/Map.vue'

export default {
  name: 'Church',
  components: {
    GoHome,
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
