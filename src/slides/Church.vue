<template>
  <div id="church" class="slide location">
    <GoHome />
    <div id="text">
      <h2>Nepomuki Szent János Templom</h2>
      <p>A templomi szertartás 16 órakkor kezdődik..</p>
      <p>Utána szerettettel várunk a templomkertbe egy kis sütire, beszélgetésre és ...</p>
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

.text{
  width: 40%;
}

.map {
  /* object-fit: contain; */
  width: 40%;

  /* margin-top: 3%; */
}
</style>
