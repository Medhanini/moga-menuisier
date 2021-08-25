<template>
<section>
      <v-container >
<TheComponentTitle :title="data.title" />
<v-row>
    <v-col 
    v-for="(value, index) in data.services"
    :key="index"
    lg="4"
    md="4"
    sm="6"
    cols="12"
    >
  <v-card
    :loading="loading"
    class=" my-12"
  >
    <v-img
      height="250"
      :src="value.image"
    ></v-img>

    <v-card-title  > {{ value.title }} </v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
      </v-row>
      <div> {{ value.description }} </div>
    </v-card-text>

  </v-card>
  </v-col>
  </v-row>
      </v-container>
      </section>
</template>


<script>
import { mapState } from 'vuex'
import TheComponentTitle from '~/components/TheComponentTitle'
  export default {
    name:'TheOurServices',
    components:{
      TheComponentTitle
    },
    computed: {
        ...mapState({
            data: state => state.list.services,
        }),
    },
    data(){
      return{
      loading: false,
      selection: 1
      }
    },
    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>