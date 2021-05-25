<template>
  <div id="church" class="slide location">
    <GoHome />
    <div id="text">
      <h2>Nepomuki Szent János Templom</h2>
      <p>A templomi szertartás 16 órakkor kezdődik..</p>
      <p>Utána szerettettel várunk a templomkertbe egy kis sütire, beszélgetésre és ...</p>
    </div>
    <Map query="Nepomuki+Szent+János+Templom,Budaörs" />
  </div>
</template>

<script>
import GoHome from '@/components/GoHome.vue'
import Map from '@/components/Map.vue'

export default {
  name: 'Church',
  components: {
    GoHome,
    Map
  }
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
