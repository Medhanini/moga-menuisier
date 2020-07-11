<template>
<v-row dense>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
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
            </div>
          </v-card>
        </v-col>
      </v-row>
</template>


<script>
  export default {
      name:'TheAboutUs',
    data: () => ({
      items: [
        {
          color: '#1F7087',
          src: '/images/header_logo_white.webp',
          description:"Moga Menuisier est une société spécialisée dans la menuiserie Aluminium , Inox ou/et MDF Disposant d'un vaste atelier parfaitement équipé, Moga Menuisier réalise sur mesure tous travaux de menuiserie Moins cher avec une large expérience dans le domaine de menuiserie, La passion et le savoir-faire de nos artisans .Impliqués dans notre travail, nous vous faisons profiter d’un travail professionnel et d’une prestation de qualité optimale.",
          title: 'à propos',
          artist: '',
        }
      ],
    }),
  }
</script>