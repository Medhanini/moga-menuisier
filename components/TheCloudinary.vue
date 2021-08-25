<template>
  <div>
    <img :src="src" alt="An image example with Cloudinary" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      src: this.$cloudinary.image.url(
          'fat_cat',
          {
            gravity: 'auto:subject',
            width: '200',
            height: 200,
            crop: 'fill',
          radius: 'max',
          }
        )
    }
  }
}
</script>
