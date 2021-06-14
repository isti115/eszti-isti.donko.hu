<template>
  <div class="map" ref="map"></div>
</template>

<script>
import makeMap from '../map-factory.js'

export default {
  name: 'Map',
  props: ['options'],
  mounted () {
    makeMap(this.$refs.map, this.options)
  }
}
</script>

<style>
.gm-style-iw button {
  display: none !important;
}

.gm-style-iw, .gm-style-iw-t:after {
  background: #f5f1e6 !important;
  user-select: none;
}

/* .navlink { */
/*   cursor: pointer; */
/* } */

.navlink svg {
  width: 30px;
  fill: #abb97c;
}
</style>
