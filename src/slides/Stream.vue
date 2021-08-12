<template>
  <div id="stream" class="slide">
    <GoHome />
    <!-- <iframe -->
    <!--   src="https://player.twitch.tv/?channel=thegreenestpenguin&#38;parent=eszti-isti.donko.hu&#38;parent=local.donko.hu" -->
    <!--   height="100%" -->
    <!--   width="100%" -->
    <!--   allowfullscreen="true"> -->
    <!-- </iframe> -->
    <div id="embed"></div>
  </div>
</template>

<script>
import GoHome from '@/components/GoHome.vue'

export default {
  name: 'Stream',
  components: {
    GoHome
  },
  async mounted () {
    const player = new window.Twitch.Player('embed', {
      width: '100%',
      height: '100%',
      channel: 'thegreenestpenguin'
    })
    setTimeout(() => player.setVolume(1), 2500)
  }
}
</script>

<style scoped>
#stream {
  background-color: rgb(240, 242, 235);
}

#embed {
  width: 100%;
  height: 100%;
}
</style>
