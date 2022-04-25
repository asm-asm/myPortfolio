<template>
  <div>
    <myheader />
    <nuxt />
    <div class="footer-copyBox">Copyright (C) 2019 All RightsReserved.</div>
  </div>
</template>

<script type="text/javascript">
  import myheader from "@/components/myheader.vue"
  export default {
    components:{
      myheader
    }
  }
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
