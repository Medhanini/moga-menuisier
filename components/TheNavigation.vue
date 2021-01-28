<template>
<div>
    <v-menu v-if="menu" offset-y >
      <template v-slot:activator="{ on: menu, attrs }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
              <v-avatar 
              v-bind="attrs"
              v-on="{ ...tooltip, ...menu }" item>
              <v-icon >
                  mdi-dots-vertical
              </v-icon>
              </v-avatar>
          </template>
          <span>menu moga-menuisier.com</span>
        </v-tooltip>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in links"
          :key="index"
        >
          <v-list-item-title>
          <nuxt-link to="'/a-propos'" >
            {{ item }}
          </nuxt-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <div v-else >
    <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        <nuxt-link to="'/a-propos'" >
            {{ link }}
          </nuxt-link>
      </v-btn>
    </div>
</div>
</template>
<script>
export default {
  name: "TheNavigation",
  data() {
    return {
      links: [
        'à propos',
        'nos experts',
        'nos services',
        'Contact Us',
      ]
    };
  },
  computed: {
        menu(){
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return true
          case 'sm': return true
          case 'md': return false
          case 'lg': return false
          case 'xl': return false
        }
      }
      }
};
</script>