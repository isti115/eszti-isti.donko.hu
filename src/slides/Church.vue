<template>
  <div id="church" class="slide location">
    <GoHome />
    <div class="text">
      <h2>Nepomuki Szent János Templom</h2>
      <p>A templomi nászmisés esküvői szertartás 16 órakor kezdődik.</p>
      <p>Utána szerettettel várunk a templomkertbe egy kis sütire, beszélgetésre és ünneplésre!</p>
      <!-- <img src="@/assets/images/church.jpg" /> -->
    </div>
    <Map :options="mapOptions" />
  </div>
</template>

<script>
import GoHome from '@/components/GoHome.vue'
import Map from '@/components/Map.vue'
import navIcon from '@/nav-icon.js'

export default {
  name: 'Church',
  components: {
    GoHome,
    Map
  },
  data: () => ({
    mapOptions: {
      center: {
        lat: 47.461700759251435,
        lng: 18.96278947934263
      },
      zoom: 17,
      icon: 'church',
      content: `
        <h3>Nepomuki Szent János Templom</h3>
        <p>2040, Budaörs, Templom tér 1.</p>
        <a
          class="navlink"
          href="https://www.google.com/maps/dir//Budaörs,Nepomuki+Szent+János-templom"
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
#church {
  background-color: rgb(213,216,206);
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
  #church {
    flex-direction: column;
  }
}

.text, .map {
  flex: 1;
  margin: 1%;
}
</style>
