<template>
  <Home />
  <!-- <Story /> -->
  <Church />
  <Party />
  <Photos />
  <Countdown />
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap" rel="stylesheet">
</template>

<script>
import Home from '@/slides/Home.vue'
// import Story from '@/slides/Story.vue'
import Church from '@/slides/Church.vue'
import Party from '@/slides/Party.vue'
import Photos from '@/slides/Photos.vue'
import Countdown from '@/slides/Countdown.vue'

export default {
  name: 'App',
  components: {
    Home,
    // Story,
    Church,
    Party,
    Photos,
    Countdown
  }
}
</script>

<style>
html, body, #app {
  width: 100%;
  height: 100%;

  overflow: hidden;

  scroll-behavior: smooth;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */

  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.slide {
  width: 100%;
  height: 100%;

  font-family: 'Amatic SC', cursive;
  font-size: 40px;

  box-sizing: border-box;

  padding: 50px;
  position: relative;

  scroll-snap-align: start;

  overflow: hidden;
}

.slide h2 {
  font-size: 40px;
}
</style>
