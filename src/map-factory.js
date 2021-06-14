import { Loader } from '@googlemaps/js-api-loader'
import styles from '@/map-styles.js'

const loader = new Loader({
  apiKey: 'AIzaSyA-K15B0HmJ0AD-sQw7TDijQoMdlA1sz6s',
  version: 'weekly',
  libraries: ['places'],
  url: 'http://maps.googleapis.com/maps/api/js'
})

export default (element, options) => {
  const { center, zoom, icon, content } = options
  const m = {}
  loader.load().then((google) => {
    // this.map = new google.maps.Map(document.getElementById(id), options)

    m.map = new google.maps.Map(element, {
      center,
      zoom,
      styles,
      disableDefaultUI: true
    })

    // initZoomControl(map)
    // initMapTypeControl(map)
    // initFullscreenControl(map)

    m.image = {
      url: require(`@/assets/images/${icon}.svg`),
      size: new google.maps.Size(30, 50),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(15, 50)
    }

    m.marker = new google.maps.Marker({
      position: options.center,
      map: m.map,
      icon: m.image
    })

    m.infowindow = new google.maps.InfoWindow({ content }).open(m.map, m.marker)
  })
}
