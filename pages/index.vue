<template>
<div>
  <h1 v-show="false" >Menuiserie Aluminium à Essaouira - Maroc | Moga-menuisier.com</h1>
<TheCarousel />
<TheOurServices />
<TheAboutUs />
<TheContactForm id="contact" />
<!-- <TheNumbers /> -->
</div>
</template>

<script>
import TheCarousel from '~/components/TheCarousel'
import TheOurServices from '~/components/TheOurServices'
import TheAboutUs from '~/components/TheAboutUs'
import TheContactForm from '~/components/TheContactForm'
import TheNumbers from '~/components/TheNumbers'

export default {
  name:"index",
  components:{
    TheCarousel,
    TheOurServices,
    TheAboutUs,
    TheNumbers,
    TheContactForm
  }
}
</script>
