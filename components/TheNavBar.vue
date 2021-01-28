<template>
  <div>
    <!-- <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
        <template v-for="item in items">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(child, i) in item.children" :key="i" link>
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ child.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.text" link>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer> -->

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="#243B55" dark>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <!-- <span class="hidden-sm-and-down">Bienvenu chez</span>
        <span>
          <strong>Moga Menuisier</strong>
        </span> -->
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
  </div>
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