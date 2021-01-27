<template>
    <h1 class="text-uppercase pt-12" > {{ title }} </h1>
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