<template>
  <!-- <div id="nav"> -->
  <!--   <router&#45;link to="/">Home</router&#45;link> | -->
  <!--   <!&#45;&#45; <router&#38;#45;link to="/about">About</router&#38;#45;link> &#45;&#45;> -->
  <!--   <router&#45;link to="/locations">Locations</router&#45;link> -->
  <!-- </div> -->
  <!-- <router&#45;view/> -->

  <div class="slide">
    <img src="@/assets/images/landing.jpg" />
  </div>
  <div id="countdown" class="slide">
    <!-- <img src="@/assets/images/countdown_blank.jpg" /> -->
    <!-- <div> -->
    <!--   <div class="time" id="days">10</div> -->
    <!--   <div class="time" id="hours">10</div> -->
    <!--   <div class="time" id="minutes">10</div> -->
    <!-- </div> -->
    <canvas id="counter" />
  </div>
  <div id="locations" class="slide">
    <h1>Locations</h1>
    <div id="church">
      <h2>Nepomuki Szent János Templom</h2>
      <Map query="Anna+Tanya,Törökbálint" />
    </div>
    <div id="venue">
      <h2>Anna Tanya</h2>
      <Map query="Nepomuki+Szent+János+Templom,Budaörs" />
    </div>
  </div>
  <!-- <div class="slide"> -->
  <!--   Lorem ab adipisicing at placeat delectus Expedita temporibus ipsam id odio sed facilis tenetur At praesentium eveniet harum quasi commodi. Reprehenderit possimus incidunt blanditiis neque sed quos! Esse doloremque consequuntur. -->
  <!-- </div> -->
  <!-- <div class="slide"> -->
  <!--   Consectetur itaque quae velit ullam repellendus deleniti itaque. Aliquid commodi officiis esse laudantium inventore Numquam quasi hic debitis quibusdam animi! Nisi quo nihil nemo magni magnam Elit laborum veritatis sapiente. -->
  <!-- </div> -->
  <!-- <div class="slide"> -->
  <!--   Lorem ab adipisicing at placeat delectus Expedita temporibus ipsam id odio sed facilis tenetur At praesentium eveniet harum quasi commodi. Reprehenderit possimus incidunt blanditiis neque sed quos! Esse doloremque consequuntur. -->
  <!-- </div> -->
  <!-- <div class="slide"> -->
  <!--   Lorem ab adipisicing at placeat delectus Expedita temporibus ipsam id odio sed facilis tenetur At praesentium eveniet harum quasi commodi. Reprehenderit possimus incidunt blanditiis neque sed quos! Esse doloremque consequuntur. -->
  <!-- </div> -->
</template>

<script>
import Map from '@/components/Map.vue'

export default {
  name: 'App',
  components: {
    Map
  },
  async mounted () {
    const target = new Date('2021-08-21T16:00')

    const canvas = document.getElementById('counter')
    const context = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    context.font = `${window.innerHeight / 10}px Comic Sans`

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      context.font = `${window.innerHeight / 10}px Comic Sans`
    })

    const drawAt = (x, y, text) => {
      context.fillText(text, x * canvas.width, y * canvas.height)
    }
    setInterval(() => {
      const delta = (target - Date.now()) / 1000 / 60
      context.clearRect(0, 0, canvas.width, canvas.height)
      // drawAt(0.275, 0.7, (new Date()).getSeconds())
      drawAt(0.275, 0.7, Math.floor(delta / 60 / 24))
      drawAt(0.55, 0.65, Math.floor(delta / 60 % 24))
      drawAt(0.725, 0.65, Math.floor(delta % 60))
      drawAt(0.45, 0.85, `${Math.floor(delta * 60 % 60)} másodperc`)
    }, 1000)
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.slide {
  width: 100%;
  height: 100%;

  scroll-snap-align: start;
}

.slide img {
  width: 100%;
  height: 100%;

  /* object-fit: cover; */
}

#countdown {
  background-image: url("assets/images/countdown_blank.jpg");
  background-size: 100% 100%;
}

.time {
  /* position: relative; */
  /* top: -50vh; */
  /* transform: translate(0px, -50vh); */
}

#locations {
  padding-top: 3%;
  background-image: url("assets/images/blank.jpg");
  background-size: cover;
}

#locations > div {
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
