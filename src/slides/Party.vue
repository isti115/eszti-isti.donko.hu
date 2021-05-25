<template>
  <div id="party" class="slide location">
    <GoHome />
    <h2>Anna Tanya</h2>
    <Map query="Anna+Tanya,Törökbálint" />
  </div>
</template>

<script>
import GoHome from '@/components/GoHome.vue'
import Map from '@/components/Map.vue'

export default {
  name: 'Party',
  components: {
    GoHome,
    Map
  }
}
</script>

<style scoped>
#party {
background-color: rgb(226,229,222);
}

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
