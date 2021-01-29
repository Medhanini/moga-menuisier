<template>
  <nav>
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="#243B55" dark>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <v-avatar size="32px" item>
          <v-img src="/images/header_logo_white.webp" alt="moga menuisier pour toutes frabrication d'aluminium à esssaouira"></v-img>
        </v-avatar>
      </v-toolbar-title>
      <v-row
      justify="center"
      no-gutters
    >

      <v-spacer></v-spacer>
      <TheNavigation />
    </v-row>
      <v-divider vertical  ></v-divider>
      <v-btn icon large>
        <v-avatar  item>
          <v-icon size="20" >mdi-share-variant-outline</v-icon>
        </v-avatar>
      </v-btn>
    </v-app-bar>
  </nav>
</template>
<script>
import TheNavigation from '~/components/TheNavigation'
export default {
  name: "TheNavBar",
  components:{
    TheNavigation
  },
  data() {
    return {

      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-home",
          title: "home",
          to: "/"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "MogaMenuisier"
    };
  }
};
</script>