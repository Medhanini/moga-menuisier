<template>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer></v-spacer>
      <span> made with Love by Mohamed hanini </span>
    </v-footer>
</template>
<script>
export default {
    name:"TheFooter"
}
</script>