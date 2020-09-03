<template lang="pug">
  section.container.indexBox
    .aboutMeBox
      p.marginBottom 2020/09/03：サイトを最新の情報に更新しました。
      h2.title.borderBottom.marginBottomHalf
        i.far.fa-grin-wink
        |ABOUT
        span.littleText 私について
      .aboutMeBox-explainBox.marginBottom
        p 名前 Asami Muto
        p 趣味でWebサイトを製作し始めてから20年がたちました。実務制作は約9年のWebデザイナー兼マークアップエンジニアです。
        p Webデザイナーのお仕事は「人の脳内にあるイメージ図を最速で具現化／モックアップ化し、チームや社内で同じ方向を見るためのコミュニケーション」だと思っています。
        p 制作したサイトやアプリを現状ままで放置をせずに、ユーザーのために継続して改善・提案していくことが得意です。
        p 趣味は英語や韓国語の習得や、最近はVue.jsを触ることが好きで、このサイトはNuxt.jsでできています。
        p Live2Dでのアニメーション作成やPremiere proでの動画編集も勉強中です。
      dl.borderBox-dl.marginBottom
        dt SKILL
          span.littleText スキル
        dd
          ul
            li レスポンシブデザイン、Androidアプリデザイン、UXデザイン、material design
            li HTML5、CSS3、jquery/Javascriptの実装、Nuxt.js
            li sass(scss)、Gulp4、pug、WordPressテンプレート作成
            li GitHub、GitLab
            li SEOを意識したライティング、LPなどの企画・ディレクション/編集業務
      dl.borderBox-dl.marginBottom
        dt 使用可能ソフト
        dd
          ul
            li Adobe XD、Photoshop CC、Illustrator CC、Zeplin、Figma、
            li VScode、その他MSオフィスソフト等
            li Slack、Chat Work、Torello
            li Premiere pro、Live2D Cubism（習得中）
      h3.title-mini.borderBottom-thin.marginBottomHalf
        i.fas.fa-tasks
        |CAREER
        span.littleText 経歴
      h4.marginBottomHalf
        i.fas.fa-address-card.marginRight
        |過去の仕事
      ul.marginBottom
        li インバウンド向けサイト（英語）のLP制作や既存HPのメンテナンス・更新等（〜2019/11）
        li アンケートの配信や会員向けサイト運営会社のサイトデザイン作成・マークアップ、アプリのUI/UXデザイン・ディレクションなど（〜2019/08）
      h4.marginBottom 直近の業務内容
        nuxt-link(nuxt-link :to="`/gallery/`").littleText
          i.fas.fa-angle-double-right
          |一覧で見る
      .nowWorkBox.marginBottom(v-for="gallery in gallerys")
        dl.borderBox-dl
          dt {{ gallery.title }}
          dd
            .borderBox-dl_left {{ gallery.discription }}
              nuxt-link(nuxt-link :to="`/gallery/${gallery.id}`").linkMore more
            .borderBox-dl_right
              a(:href="gallery.href").linkUrl {{ gallery.href }}
      dl.borderBox-dl.marginBottom
        dt その他
        dd.paddingLeft WEB担当者の育成・サイトやアプリのUI/UX改善提案・デザイン業務フローの見直しなど
      
      h4.marginBottomHalf
        i.fas.fa-address-card.marginRight
        |過去の経歴
      span.littleText 実務9年/個人制作を含むとホームページ制作歴20年
      ul.marginBottom
        li バンタンデザイン研究所グラフィックデザイン専攻本科卒
        li 玩具向けデザイン会社(B to C)　WEBデザイン/コーダー
        li ゲーム会社(B to C)　WEBデザイン/コーダー
        li 物流会社(B to B)　WEBデザイン/コーダー/進行管理
        li ECサイト系制作会社(B to B to C)　WEBデザイン/コーダー/進行管理
        //- li アンケート系制作会社(B to B or C)　
        //-   br
        //-   |WEB・UI・UXデザイン/マークアップ/フロントエンドエンジニア/進行管理/ディレクション
      hr(noshade)
      .textBox
        p 中学生のころよりHP制作を開始・独学でHTMLを学び、専門学校ではデザインの基礎だけでなくPhotoshopやIllustrator、Dreamweaverの使い方を習得し、Flashを独学で習得。
        p 玩具系に強いデザイン会社で「
          strong カピバラさん
          |」などの初期公式ページなどのデザイン・コーディングを経験。その後ゲーム会社にてゲーム公式サイトやイベント公式ページのデザイン・コーディング・更新や、当時未着手だったフューチャーフォン対応（Movable Type）などを行う。
        p 個人ではHTML5やCSS3、SEO対策、レスポンシブデザインの勉強のためWordpressテンプレートを1から自作し、女性向け化粧品紹介サイトなどを個人的に運営しています。
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

<style lang="scss">
</style>
