<template lang="pug">
  section.container
    gallerys
</template>

<script>
import Gallerys from '~/components/Gallery.vue'

export default {
  components: {
    Gallerys
  },
  data () {
    return {
      title: 'GALLERY',
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // `hid` は一意の識別子として使用されます。 `vmid` は動作しないので使わないでください。
        { hid: 'description', name: 'description', content: 'Portfolio GALLERY' }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>