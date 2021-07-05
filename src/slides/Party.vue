<template>
  <div id="party" class="slide location">
    <GoHome />
    <div class="text">
      <h2>Anna Tanya</h2>
      <p>
        A szertartás utáni vacsora és a lakodalom Törökbálinton, az <em>Anna Tanyán</em> kerül megrendezésre.
        A vacsora 19 órakor kezdődik, utána pedig közösen folytatjuk az ünneplést.
      </p>
      <!-- <p>minden ...</p> -->
    </div>
    <Map :options="mapOptions" />
  </div>
</template>

<script>
import GoHome from '@/components/GoHome.vue'
import Map from '@/components/Map.vue'
import navIcon from '@/nav-icon.js'

export default {
  name: 'Party',
  components: {
    GoHome,
    Map
  },
  data: () => ({
    mapOptions: {
      center: {
        lat: 47.426103,
        lng: 18.933639
      },
      zoom: 16,
      icon: 'party',
      content: `
        <h3>Anna Tanya</h3>
        <p>Törökbálint, Hegyalja u., 2045</p>
        <a
          class="navlink"
          href="https://www.google.com/maps/dir//Törökbálint,+Anna+Tanya"
          target="_blank"
        >
          ${navIcon}
        </a>
      `
    }
  })
}
</script>

<style scoped>
#party {
  background-color: rgb(226,229,222);
  display: flex;
  justify-content: space-between;
}

.text {
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: clamp(10px, 5vw, min(40px, 8vh));
}

@media (max-width: 800px) {
  #party {
    flex-direction: column;
  }
}

.text, .map {
  flex: 1;
  margin: 1%;
}
</style>
