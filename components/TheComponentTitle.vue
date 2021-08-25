<template>
    <h2 class="text-uppercase pt-12" > {{ title }} </h2>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            require:true
            }
        }
}
</script>