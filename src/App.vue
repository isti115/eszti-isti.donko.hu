<template>
  <Home />
  <Story />
  <Church />
  <Party />
  <Countdown />
</template>

<script>
import Home from '@/slides/Home.vue'
import Story from '@/slides/Story.vue'
import Church from '@/slides/Church.vue'
import Party from '@/slides/Party.vue'
import Countdown from '@/slides/Countdown.vue'

export default {
  name: 'App',
  components: {
    Home,
    Story,
    Church,
    Party,
    Countdown
  }
}
</script>

<style>
html, body, #app {
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.slide {
  width: 100%;
  height: 100%;

  scroll-snap-align: start;
}
</style>
