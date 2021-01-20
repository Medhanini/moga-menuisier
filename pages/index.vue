<template>
<div>
<TheCarousel />
<TheAboutUs />
<TheOurServices />
<TheContactForm />
<TheNumbers />
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
