<template lang="html">
  <header>
    <div class="header">
      <nuxt-link to="/">
        <h1>
          Portfolio
        </h1>
      </nuxt-link>
      <ul class="header-menu">
        <nuxt-link to="/gallery">
          <li>GALLERY</li>
        </nuxt-link>
        <!-- <nuxt-link to="/contact">
          <li>CONTACT</li>
        </nuxt-link> -->
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name:'myheader'
}
</script>

<style lang="scss">

header {
  z-index: 100;
  position: relative;
}

.header {
  display: flex;
  align-items: center;
  max-width: 96%;
  height: 56px;
  margin: auto;
  a {
    color: $navy;
    &:visited,
    &:active {
      color: $navy;
    }
  }
  // @media screen and (max-width: $breakpointPCmd) {
  //   padding-left: 2%;
  // }
}

.header-menu {
  list-style: none;
  display: flex;
  justify-content: space-around;
  li {
    line-height: 56px;
    padding: 0 2em;
    @media screen and (max-width: $breakpointSP) {
      padding: 0 .8em;
    }
  }
}

</style>