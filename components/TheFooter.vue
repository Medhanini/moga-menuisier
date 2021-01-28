<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      color="#243B55"
      class=" white--text text-center pl-16 pr-16"
    >
    <v-row>
      <v-col class="col-lg-4" >
        <img height="50" src="/images/logo.png" >
        <v-divider class="mt-2 mb-10" ></v-divider>
         <v-card-text class="white--text pt-0">
        Trouvez facilement les meilleurs professionnels pour tous vos travaux sur moga-menuisier.com - Réseau N°1 des professionnels du Menuiserie à Essaouira
      </v-card-text>
      </v-col>
      <v-col class="col-lg-4" >
        tags
        <v-divider class="my-10" ></v-divider>
        <TheTags/>
      </v-col>
      <v-col>
        contact
        <v-divider class="my-10" ></v-divider>
      </v-col>
    </v-row>


      <v-divider></v-divider>
<v-row>
  <v-col>
      <span class="white--text">
        © {{ new Date().getFullYear() }} — <strong> moga-menuisier.com - Tous droits réservés</strong> by Mohamed hanini
      </span>
  </v-col>
  <v-col>
<v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
  </v-col>
</v-row>
    </v-card>
    
  </v-footer>
</template>
<script>
import TheTags from '~/components/TheTags'
export default {
    name:"TheFooter",
    components:{
      TheTags
    },
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
}
</script>