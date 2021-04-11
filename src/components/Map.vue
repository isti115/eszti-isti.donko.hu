<template>
  <iframe
    class="map"
    loading="lazy"
    allowfullscreen
    :src="`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}`">
  </iframe>
</template>

<script>
export default {
  name: 'Map',
  props: ['query'],
  data: () => ({
    apiKey: 'AIzaSyA-K15B0HmJ0AD-sQw7TDijQoMdlA1sz6s'
  })
}
</script>
