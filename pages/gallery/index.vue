<template lang="pug">
  section.container
    gallerys
    backtotop
</template>

<script>
import Gallerys from '~/components/Gallery.vue'
import backtotop from "@/components/backToTop.vue"

export default {
  components: {
    Gallerys,
    backtotop
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