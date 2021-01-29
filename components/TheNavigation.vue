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
      }
};
</script>