<template>
  <v-app >
    <TheNavBar />
     <v-main  >
        <nuxt />

    <TheScrolltoTop/>
    <TheWhatsappBtn />
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheNavBar from '~/components/TheNavBar'
import TheFooter from '~/components/TheFooter'
import TheScrolltoTop from '~/components/TheScrolltoTop'
import TheWhatsappBtn from '~/components/TheWhatsappBtn'
export default {
  components:{
    TheNavBar
    , TheFooter
    , TheScrolltoTop
    , TheWhatsappBtn
  }
}
</script>
<style lang="scss" >
.container{
  padding: 0;
}
</style>