<template>
  <div id="countdown" class="slide">
    <GoHome />
    <div id="text">
      <h2>Hamarosan találkozunk!</h2>
      <p>Egészen pontosan még</p>
      <p>{{ days }} nap,</p>
      <p>{{ hours }} óra,</p>
      <p>{{ minutes }} perc</p>
      <p>{{ seconds }} másodperc</p>
      <p>van hátra.</p>
      <!-- <span>
        Egészen pontosan még {{ days }} nap, {{ hours }} óra, {{ minutes }} perc
        és {{ seconds }} másodperc van hátra.
      </span> -->
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

#text{
  width: 50%;
}

#text h2{
  margin-bottom: 50px;
}

#countdown img {
  /* flex: 1; */
  object-fit: cover;
  width: 50%;
}
</style>
