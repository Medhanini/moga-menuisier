<template>
<div>
<TheCarousel />
<TheAboutUs />
<TheOurServices />
</div>
</template>

<script>
import TheCarousel from '~/components/TheCarousel'
import TheOurServices from '~/components/TheOurServices'
import TheAboutUs from '~/components/TheAboutUs'
export default {
  name:"index",
  components:{
    TheCarousel,
    TheOurServices,
    TheAboutUs
  }
}
</script>
