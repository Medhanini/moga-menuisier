<template>
<div>
<TheCarousel />
<TheOurServices />
</div>
</template>

<script>
import TheCarousel from '~/components/TheCarousel'
import TheOurServices from '~/components/TheOurServices'
export default {
  name:"index",
  components:{
    TheCarousel,
    TheOurServices
  }
}
</script>
