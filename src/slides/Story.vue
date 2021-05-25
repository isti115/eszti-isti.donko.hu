<template>
  <div id="story" class="slide">
    <GoHome />
    <h2>Történet</h2>
    <span>Eszti</span>
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
  padding: 50px;
  background-color: rgb(196,203,185);
  display: inline-flex;
  justify-content: space-between;
}

.h2{
  flex: 1;
}

.span{
  flex:1;
}
</style>
