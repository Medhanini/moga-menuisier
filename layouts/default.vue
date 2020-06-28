<template>
  <v-app >
    <TheNavBar />
     <v-main  >
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheNavBar from '~/components/TheNavBar'
import TheFooter from '~/components/TheFooter'
export default {
  components:{
    TheNavBar
    , TheFooter
  }
}
</script>
