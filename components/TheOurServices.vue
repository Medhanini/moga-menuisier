<template>
<div>
<h1> Nos services </h1>
<v-row>
    <v-col 
    v-for="(value, index) in services"
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
</div>
</template>


<script>
  export default {
    name:'TheOurServices',
    data(){
      return{
      loading: false,
      selection: 1,
      services:[
        {
          title:'Menuiserie Aluminium',
          subtitle:'Menuiserie Aluminium Essaouira - Maroc',
          description:"Pour toute réparation ou rénovation d'aluminium contactez les M3alem de Moga Menuisier. Trouvez gratuitement la sélection des meilleurs menuisier d'aluminium à Essaouira. Service 100% Gratuit.",
          image:"https://cdn.vuetifyjs.com/images/cards/cooking.png"
        },
       {
          title:'Menuiserie Inox',
          subtitle:'Menuiserie Inox Essaouira - Maroc',
          description:"Disposant d'un vaste atelier parfaitement équipé, Moga Menuisier réalise sur mesure tous travaux de menuiserie et ferronnerie métallique mais également inox.",
          image:"https://cdn.vuetifyjs.com/images/cards/cooking.png"
        },
        {
          title:'Menuiserie MDF',
          subtitle:'Menuiserie MDF Essaouira - Maroc',
          description:"Moins cher et plus facile à travailler que le bois massif Le MDF (Medium Density Fiberboard) est un panneau composite de fibres de bois à densité moyenne.",
          image:"https://cdn.vuetifyjs.com/images/cards/cooking.png"
        } 
      ]
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