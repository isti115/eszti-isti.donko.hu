<template>
  <div id="countdown" class="slide">
    <GoHome />
    <h2>Countdown</h2>
    <span>
      Még {{ days }} nap, {{ hours }} óra, {{ minutes }} perc
      és {{ seconds }} másodperc van hátra.
    </span>
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
</style>
