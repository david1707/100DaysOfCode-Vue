<template>
    <div class="google-map">
        <GmapMap
          :center="{lat:39.4880541, lng:-0.3577675}"
          :zoom="12"
          map-type-id="terrain"
          style="width: 100%; height: 30vh">
        <GmapMarker :position="google && new google.maps.LatLng(lat, lng)"/></GmapMap>
    </div>
</template>

<script>
import {gmapApi} from 'vue2-google-maps'

export default {
    data() {
        return {
            reactive: true,
            lat: 39.4880541,
            lng: -0.3577675,
        }
    },
    computed: {
        google: gmapApi
    }
}
</script>
