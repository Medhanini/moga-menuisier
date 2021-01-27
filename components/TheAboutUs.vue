<template>
<section class="TheAboutUs" >
  <v-container>
    <TheComponentTitle :title="item.title" />
    <v-row class="pt-12  mt-md-12" >
      <v-col class="col-12 col-md-4" >
        <v-img :src="item.src" ></v-img>
      </v-col>
      <v-col>
        <p class="text" v-text="item.description" ></p>
      </v-col>
    </v-row>
  </v-container>
  
<!-- <v-row dense>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
          height="100%"
          class="py-10"
            :color="item.color"
            dark
          >
            <v-container class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>
                <v-card-text>
                    {{ item.description }}
                </v-card-text>
                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>

              <v-avatar
                class="ma-3"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </v-container>
          </v-card>
        </v-col>
      </v-row> -->
      </section>
</template>


<script>
import TheComponentTitle from '~/components/TheComponentTitle'
  export default {
      name:'TheAboutUs',
      components:{
        TheComponentTitle
      },
    data(){
      return{
        item: 
        {
          color: '#1F7087',
          src: '/images/logo.png',
          description:"Moga Menuisier est une société spécialisée dans la menuiserie Aluminium , Inox ou/et MDF Disposant d'un vaste atelier parfaitement équipé, Moga Menuisier réalise sur mesure tous travaux de menuiserie Moins cher avec une large expérience dans le domaine de menuiserie, La passion et le savoir-faire de nos artisans .Impliqués dans notre travail, nous vous faisons profiter d’un travail professionnel et d’une prestation de qualité optimale.",
          title: 'à propos',
          artist: '',
        }
      }
    },
  }
</script>
<style lang="scss">
.TheAboutUs{
  height: 500px;
  background-image: url('/bg.jpeg');
  
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>