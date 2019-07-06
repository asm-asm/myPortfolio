<!-- ./components/Gallery.vue -->
<template lang="pug">
  article.content.marginBottom
    div(v-for="gallery in gallerys")
      .galleryBox.marginBottom
        .galleryTitleBox
          h2.marginBottomHalf {{ gallery.title }}
        .galleryImageBox
          .gall-pc
            img(v-bind:src="gallery.pic1" alt="gallery.discription1").screenPC
          .gall-spBox
            .gall-sp
              img(v-bind:src="gallery.pic2" alt="gallery.discription2").screenSP
            .gall-sp
              img(v-bind:src="gallery.pic3" alt="gallery.discription3").screenSP
      .galleryExplainBox
        .galleryExplainBox_leftBox
          dl.galleryExplainBox-description.marginBottomHalf
            dt.galleryExplainBox-description_point URL
            dd
              a(v-bind:href="gallery.href" target="_blank" rel="noopener").linkUrl {{ gallery.href }}
              div(v-html="gallery.href2").googleBanner
          dl.galleryExplainBox-description.marginBottomHalf
            dt.galleryExplainBox-description_point 期間
            dd {{ gallery.day }}
          dl.galleryExplainBox-description.marginBottomHalf
            dt.galleryExplainBox-description_point 規模
            dd {{ gallery.kibo }}
          dl.galleryExplainBox-description.marginBottomHalf
            dt.galleryExplainBox-description_point 担当
            dd(v-html="gallery.tanto")
          dl.galleryExplainBox-description.marginBottomHalf
            dt.galleryExplainBox-description_point 人数
            dd
              ul
                li(v-for="r in gallery.ninzu") {{ r }}
          dl.galleryExplainBox-description.marginBottomHalf
              dt.galleryExplainBox-description_point 使用
              dd {{ gallery.shiyou }}
        .galleryExplainBox_rightBox
          dl.galleryExplainBox-description.marginBottomHalf
            dt.galleryExplainBox-description_point 工程
            dd
              ul
                li(v-for="r in gallery.kotei") {{ r }}
          dl.galleryExplainBox-description.marginBottomHalf
            dt.galleryExplainBox-description_point 所感
            dd
              p(style="white-space: pre-wrap;" v-html="gallery.shokan")
</template>

<script>
  import gallerys from '~/assets/json/data.json'

  export default {
    name: 'gallerys',
    data () {
      return { gallerys }
    }
  }
</script>

