<template>
  <div id="countdown" class="slide">
    <GoHome />
    <div id="text">
      <h2>Hamarosan találkozunk!</h2>
      <div id="vertical">
        <p>Egészen pontosan még</p>
        <table>
          <tr><td>{{ days }}</td><td>nap,</td></tr>
          <tr><td>{{ hours }}</td><td>óra,</td></tr>
          <tr><td>{{ minutes }}</td><td>perc,</td></tr>
          <tr><td>{{ seconds }}</td><td>másodperc</td></tr>
        </table>
        <p>van hátra.</p>
      </div>
      <div id="horizontal">
        <span>
          Egészen pontosan még {{ days }}&nbsp;nap, {{ hours }}&nbsp;óra és {{ minutes }}&nbsp;perc
          <!-- és {{ seconds }} másodperc -->
          van hátra.
        </span>
      </div>
    </div>
    <img src="@/assets/images/test.jpg" />
  </div>
</template>

<script>
import GoHome from '@/components/GoHome.vue'

export default {
  name: 'Countdown',
  components: {
    GoHome
  },
  async mounted () {
    setInterval(this.update, 1000)
  },
  data: () => ({
    days: '??',
    hours: '??',
    minutes: '??',
    seconds: '??'
  }),
  methods: {
    update () {
      const target = new Date('2021-08-21T16:00')
      const delta = (target - Date.now()) / 1000 / 60

      this.days = Math.floor(delta / 60 / 24)
      this.hours = Math.floor(delta / 60 % 24)
      this.minutes = Math.floor(delta % 60)
      this.seconds = Math.floor((delta * 60) % 60)
    }
  }
}
</script>

<style scoped>
#countdown {
  background-color: rgb(190,196,171);
  display: inline-flex;
  justify-content: space-between;
  align-items: stretch;
}

#text {
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

#text h2 {
  margin-bottom: 50px;
}

table {
  margin: auto;
}

td:nth-child(1) {
  width: 50px;
  text-align: right;
}

td:nth-child(2) {
  padding-left: 10px;
  text-align: left;
}

#countdown img {
  /* flex: 1; */
  object-fit: cover;
  width: 50%;
}

@media (max-width: 800px) {
  #text {
    width: 100%;
  }

  #countdown img {
    display: none;
  }
}

#vertical { display: block; }
#horizontal { display: none; }

@media (max-height: 470px) {
  #horizontal { display: block; }
  #vertical { display: none; }
}
</style>
