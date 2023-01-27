<template lang="pug">
  section.container.indexBox
    .aboutMeBox
      p.marginBottom 2023/01/27：サイト情報を最新にしました。
      h2.title.borderBottom.marginBottomHalf
        i.far.fa-grin-wink
        |ABOUT
        span.littleText 私について
      .aboutMeBox-explainBox.marginBottom
        //- p 名前 A M
        p 趣味でWebサイトを製作し始めてから20年がたちました。実務制作は10年以上のWebデザイナー兼マークアップエンジニアです。
        p Webデザイナーのお仕事は「人の脳内にあるイメージ図を最速で具現化／モックアップ化し、チームや社内で同じ方向を見るためのコミュニケーション」だと思っています。
        p 制作したサイトやアプリを現状ままで放置をせずに、ユーザーのために
          span 継続して改善・提案していくことが得意
          |です。
        p 趣味は英語や韓国語の習得です。
        |最近は動画制作を勉強していて、サムネイルによる効果検証なども行っています。※このサイトはNuxt.jsでできています。
      dl.borderBox-dl.marginBottom
        dt SKILL
          span.littleText スキル
        dd
          ul
            li 0からのバナー制作・LP制作
            li クライアントやサービスに合わせたイメージ作りや改善提案、新規企画
            li レスポンシブデザイン、Androidアプリデザイン、UXデザイン
            li HTML、CSS、jquery/Javascriptの実装、Nuxt.js
            li sass(scss)、WordPressテンプレート作成
            li GitHub、GitLab
            li SEOを意識したライティング、LPなどの企画・ディレクション/編集業務
      dl.borderBox-dl.marginBottom
        dt 使用可能ソフト
        dd
          ul
            li Adobe XD、Photoshop CC、Illustrator CC、Figma、Canva
            li VScode、その他MSオフィスソフト等
            li Slack、Chat Work、Torello、Teams
            li Premiere pro（習得中）、Live2D Cubism（習得中）
      h3.title-mini.borderBottom-thin.marginBottomHalf
        i.fas.fa-tasks
        |CAREER
        span.littleText 経歴
      h4.marginBottomHalf
        i.fas.fa-address-card.marginRight
        |過去の仕事
      ul.marginBottom
        li 各大企業の採用領域での集客用バナーやLPなどの作成。(2022/5〜現在)
        li ディレクターへの技術的・知識的サポート(2022/5〜現在)
        li 勤怠管理システム会社公式HP運用更新など（〜2022/5）
        li インバウンド向けサイト（英語）のLP制作や既存HPのメンテナンス・更新等（〜2019/11）
        li アンケートの配信や会員向けサイト運営会社のサイトデザイン作成・マークアップ、アプリのUI/UXデザイン・ディレクションなど（〜2019/08）
      h4.marginHalfBottom
        i.fas.fa-address-card.marginRight
        |直近の制作物（採用関連ページ）
      ul.workedLinks.marginBottom
        li
          a(href="https://recruiting-site.jp/s/toyotasystems/9699" target="_blank" rel="noopener") https://recruiting-site.jp/s/toyotasystems/9699
        li
          a(href="https://recruiting-site.jp/s/subaru-move/" target="_blank" rel="noopener") https://recruiting-site.jp/s/subaru-move/
        li
          a(href="https://recruiting-site.jp/s/jx-foundry/9831" target="_blank" rel="noopener") https://recruiting-site.jp/s/jx-foundry/9831
        li
          a(href="https://recruiting-site.jp/s/sony-semicon-solutions/9832" target="_blank" rel="noopener") https://recruiting-site.jp/s/sony-semicon-solutions/9832
        li
          a(href="https://recruiting-site.jp/s/hazurechi-community/" target="_blank" rel="noopener") https://recruiting-site.jp/s/hazurechi-community/
        li
          a(href="https://recruiting-site.jp/s/sony-semicon-solutions/9836" target="_blank" rel="noopener") https://recruiting-site.jp/s/sony-semicon-solutions/9836
      ol.workedBanners.marginBottom
        li
          img(src="@/static/img/banner1.png" alt="Instagram広告")
        li
          img(src="@/static/img/banner2.jpeg" alt="LINEリッチメニュー")
          br
          |↑LINEリッチメニュー
        li
          img(src="@/static/img/banner3.png" alt="Googleなどのメディア広告")
        li
          img(src="@/static/img/banner4.png" alt="Googleなどのメディア広告2")
          br
          |↑Facebook/Instagramなど用のバナー
      h4.marginBottom
        i.fas.fa-address-card.marginRight
        |過去の業務内容
        nuxt-link(nuxt-link :to="`/gallery/`").littleText
          i.fas.fa-angle-double-right
          |一覧で見る
      .nowWorkBox.marginBottom(v-for="gallery in gallerys")
        dl.borderBox-dl
          dt {{ gallery.title }}
          dd
            .borderBox-dl_left {{ gallery.discription }}
              nuxt-link(nuxt-link :to="`/gallery/${gallery.id}`").linkMore 詳細を見る
            .borderBox-dl_right
              a(:href="gallery.href").linkUrl {{ gallery.href }}
      dl.borderBox-dl.marginBottom
        dt その他
        dd.paddingLeft WEB担当者の育成・サイトやアプリのUI/UX改善提案・デザイン業務フローの見直しなど
      
      h4.marginBottomHalf
        i.fas.fa-address-card.marginRight
        |過去の経歴
      span.littleText 実務10年以上/個人制作を含むとホームページ制作歴20年
      ul.marginBottom
        li バンタンデザイン研究所グラフィックデザイン専攻本科卒
        li 玩具系デザイン会社(B to C)　WEBデザイン/コーダー
        li ゲーム会社(B to C)　WEBデザイン/コーダー
        li 物流会社(B to B)　WEBデザイン/コーダー/進行管理
        li ECサイト系制作会社(B to B to C)　WEBデザイン/コーダー/進行管理
        li アンケート系制作会社(B to B or C)　
          br
          |WEB・UI・UXデザイン/マークアップ/フロントエンドエンジニア/進行管理/ディレクション
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
