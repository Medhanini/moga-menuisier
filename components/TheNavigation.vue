<template>
<div>
  <!-- <template v-if="menu"  >
    <v-menu offset-y >
      <template v-slot:activator="{ on: menu, attrs }">
              <v-avatar 
              v-bind="attrs"
              v-on="{ ...menu }" item>
              <v-icon >
                  mdi-dots-vertical
              </v-icon>
              </v-avatar>
      </template>
      <v-list>
        <v-list-item
          v-for="(value,index) in data"
          :key="index"
          v-scroll-to="value.link"
        >
          <v-list-item-title>
            {{ value.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </template>
    <template v-else > -->
    <v-btn
        v-for="(value,index) in data"
        :key="index"
        color="white"
        text
        rounded
        class="my-2"
        v-scroll-to="value.link"
      >
            {{ value.name }}
      </v-btn>
    <!-- </template> -->
</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: "TheNavigation",
  computed: {
        ...mapState({
            data: state => state.list.navigation,
        }),
        menu(){
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return true
          case 'sm': return true
          case 'md': return false
          case 'lg': return false
          case 'xl': return false
        }
      }
      },
      jsonld() {
    const items = this.data.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': "https://moga-menuisier.com/",
        name: item.name,
      },
    }));
    return {
      '@context': 'http://schema.org',
      "@graph": 
            [
               {
                    "@type": "WebPage",
                    "name": "Accueil",
                    "description": "Moga Menuisier est une société spécialisée dans la menuiserie Aluminium , Inox ou/et MDF Disposant d'un vaste atelier parfaitement équipé, Moga Menuisier réalise sur mesure tous travaux de menuiserie Moins cher avec une large expérience dans le domaine de menuiserie, La passion et le savoir-faire de nos artisans .Impliqués dans notre travail, nous vous faisons profiter d’un travail professionnel et d’une prestation de qualité optimale."
                },
                {
                  '@type': 'BreadcrumbList',
                  itemListElement: items,
                }
            ]
    };
  }
};
</script>