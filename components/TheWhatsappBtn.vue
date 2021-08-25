<template>
  <v-btn
    fab
    dark
    fixed
    bottom
    left
    color="#25D366"
    :href="getLinkWhastapp"
  >
    <v-icon size="40" >mdi-whatsapp</v-icon>
  </v-btn>
</template>
<script>
export default {
  name:"",
  data(){
      return{
        number:"0609889770", message:"Bonjour, j'ai eu votre numéro su moga menuisier"
      }
    },
    computed:{
      getLinkWhastapp() {
        var url = 'https://wa.me/' 
          + this.number 
        return url
        }
    }
}
</script>