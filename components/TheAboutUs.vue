<template>
<section class="TheAboutUs" >
  <v-container>
    <TheComponentTitle :title="data.title" />
    <v-row class="pt-4 pt-sm-12  mt-md-12" >
      <v-col class="col-12 col-sm-4" >
        <v-img :src="data.img" :alt="data.img" ></v-img>
      </v-col>
      <v-col class="col-12 col-sm-8" >
        <p class="text" v-text="data.text" ></p>
      </v-col>
    </v-row>
  </v-container>
      </section>
</template>


<script>
import { mapState } from 'vuex'
import TheComponentTitle from '~/components/TheComponentTitle'
  export default {
      name:'TheAboutUs',
      components:{
        TheComponentTitle
      },
      computed: {
        ...mapState({
            data: state => state.list.about,
        }),
    }
  }
</script>
<style lang="scss">
.TheAboutUs{
  height: 500px;
  background-image: url('/images/bg.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>