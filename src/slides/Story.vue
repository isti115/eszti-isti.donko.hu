<template>
  <div id="story" class="slide">
    <GoHome />
    <h2>Történet</h2>
  </div>
</template>

<script>
import GoHome from '@/components/GoHome.vue'

export default {
  name: 'Story',
  components: {
    GoHome
  }
}
</script>

<style scoped>
#story {
  background-color: rgb(190, 170, 180);
}
</style>
