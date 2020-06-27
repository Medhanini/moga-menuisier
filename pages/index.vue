<template>
  <v-layout
    column
    justify-center
    align-center
  >
<TheCarousel />
  </v-layout>
</template>

<script>
import TheCarousel from '~/components/TheCarousel'
export default {
  name:"index",
  components:{
    TheCarousel
  }
}
</script>
