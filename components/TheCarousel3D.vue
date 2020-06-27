<template>
    <Carousel3d>
        <Slide :index="0" >
            slide 1
        </Slide>
        <Slide :index="1" >
            slide 2
        </Slide>
    </Carousel3d>
</template>
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
    name:"TheCarousel3D",
    components:{
        Carousel3d
        , Slide
    }
}
</script>