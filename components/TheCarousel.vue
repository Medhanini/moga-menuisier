<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="imagePath+item.src"
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
            src: 'menuiserie_aluminium_essaouira_mogador.webp',
          },
          {
            src: 'menuiserie_inox_essaouira_mogador.webp',
          },
          {
            src: 'menuiserie_mdf_essaouira_mogador.webp',
          }
        ],
      }
    },
    computed: {
        imagePath(){
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '/images/mobile/'
          case 'sm': return '/images/tablette/'
          case 'md': return '/images/desktop/'
          case 'lg': return '/images/desktop/'
          case 'xl': return '/images/desktop/'
        }
      }
      }
  }
</script>