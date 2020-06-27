<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>


<script>
  export default {
      name:"TheCarousel",
    data () {
      return {
        items: [
          {
            src: '/images/1.webp',
          }
        ],
      }
    },
  }
</script>