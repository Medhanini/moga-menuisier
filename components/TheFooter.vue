<template>
  <v-footer
    dark
    padless
    color="#243B55"
  >
  <v-row align="center" justify="center" >
    <v-card
      flat
      tile
      color="#243B55"
      class="container white--text text-center "
    >
    <v-row>
      <v-col class="col-lg-4" >
        <img class="mt-7" height="50" src="/images/logo.png" >
        <v-divider class="my-10" ></v-divider>
         <v-card-text class="white--text pt-0">
        Trouvez facilement les meilleurs professionnels pour tous vos travaux sur moga-menuisier.com - Réseau N°1 des professionnels du Menuiserie à Essaouira
      </v-card-text>
      </v-col>
      <v-col class="col-lg-4" >
        <TheComponentTitle :title="`tags`" />
        <v-divider class="my-10" ></v-divider>
        <TheTags/>
      </v-col>
      <v-col>
        <TheComponentTitle :title="`informations`" />
        <v-divider class="my-10" ></v-divider>
        <h5> Numéro de téléphone : +212(0) 6 09 88 97 70</h5>
        <h5> ville & pays : Essaouira, Maroc </h5>

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


      <v-divider></v-divider>
<v-row>
  <v-col class="col-12" >
      <span class="white--text">
        © {{ new Date().getFullYear() }} — <strong> moga-menuisier.com - Tous droits réservés</strong> by Mohamed hanini
      </span>
  </v-col>
</v-row>
    </v-card>
    </v-row>
    
  </v-footer>
</template>
<script>
import TheTags from '~/components/TheTags'
import TheComponentTitle from '~/components/TheComponentTitle'
export default {
    name:"TheFooter",
    components:{
      TheTags
      , TheComponentTitle
    },
    data: () => ({
      icons: [
        'mdi-facebook',
        // 'mdi-instagram',
      ],
    }),
}
</script>