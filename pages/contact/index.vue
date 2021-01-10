<template lang="pug">
  div.main-content
    div.container.contactBox.marginBottom
      article.content
        h2.marginBottom Contact
        .contactBox-explain.marginBottom
          //- p 今現在、リモートワーク可能（一部でも可）かつ
          //-   br
          //-   |フレックス勤務可能な東京都内の転職先を探しております。
          //- p WEB・UI・UXデザイナー・マークアップエンジニアをお探しでしたら、
          //-   br
          //-   |各種サイトまたはメールアドレスまでご連絡いただけますと幸いです。
          //- p 学歴や職務経歴表などがご入用でしたら、別途お送りいたします。
          //-   br
          //-   |（※このポートフォリオのサイトや下記サイトで詳細はご覧いただけます）
        dl.borderBox-dl.marginBottom
          dt Wantedly
          dd
            a(href="https://www.wantedly.com/users/38606072" target="_blank" rel="noopener") https://www.wantedly.com/users/38606072
          dt
            i.fab.fa-linkedin
            |linkedIn
          dd
            a(href="https://www.linkedin.com/in/ann-muto-483500176/" target="_blank" rel="noopener") https://www.linkedin.com/in/ann-muto-483500176/
          dt
            i.far.fa-envelope
            |mail
          dd info@mooty.xyz

        h2.marginBottom その他作品など
        dl.borderBox-dl
          dt
            i.fab.fa-dribbble
            |dribbble
          dd
            a(href="https://dribbble.com/ASm_Design_" target="_blank" rel="noopener") https://dribbble.com/ASm_Design_
          dt
            i.fab.fa-github
            |GitHub
          dd
            a(href="https://github.com/asm-asm/myPortfolio" target="_blank" rel="noopener") https://github.com/asm-asm/myPortfolio
          dt qiita
          dd
            a(href="https://qiita.com/sam_sam" target="_blank" rel="noopener") https://qiita.com/sam_sam
    backtotop
</template>

<script>
import backtotop from "@/components/backToTop.vue"

export default {
  components:{
    backtotop
  }
}
</script>

<style lang="scss">
</style>