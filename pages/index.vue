<template>
  <v-layout
    column
    justify-center
    align-center
  >
<TheCarousel />
<!-- <TheCarousel3D /> -->
  </v-layout>
</template>

<script>
import TheCarousel from '~/components/TheCarousel'
// import TheCarousel3D from '~/components/TheCarousel3D'
export default {
  name:"index",
  components:{
    TheCarousel,
    // TheCarousel3D
  }
}
</script>
