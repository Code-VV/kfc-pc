<template>
  <!-- START HEADER AREA -->
  <header class="nft-header-area">
    <div class="header-bottom-area">
      <div class="container">
        <div class="row">
          <div class="col-xl-2 col-md-2 d-flex align-items-center">
            <div class="logo">
              <a href="/"><img src="@/assets/images/logotop.png" alt=""></a>
            </div>
          </div>
          <div class="col-xl-6 col-md-3">
            <div class="nft-main-menu">
              <nav id="mobile-menu">
                <ul id="menu-navbar">
                  <li><a href="/"></a></li>
<!--                  <li><a href="about.html">About</a></li>-->
                </ul>
              </nav>
            </div>
            <div id="mobile-menu-wrap"> </div>
          </div>
          <div v-if="isHome" class="col-xl-4 col-md-7 d-flex align-items-center justify-content-end">
            <div v-if="false" class="nft-site-color-mode">
              <a href="#" class="dark-mode"><img src="@/assets/img/mode-dark.png" alt=""></a>
              <a href="index-day-mode.html" class="light-mode"><img src="@/assets/img/mode-light.png" alt=""></a>
            </div>
            <div v-else>
              <a @click="login" class="nft-hero-btn style-2 boxed-btn" style="padding: 5px 0; width: 100px; font-size: 16px">Log In</a>
              <a @click="register" class="nft-hero-btn nft-highlight-bg-color boxed-btn" style="margin-left: 12px; padding: 5px 0; width: 100px; font-size: 16px">Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- END HEADER AREA -->
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isHome: true,
    }
  },
  created() {
    this.isHome = this.$route.path === '/'
  },
  methods: {
    login() {
      this.$router.push('/register?login=1')
    },
    register() {
      this.$router.push('/register?login=2')
    }
  },
}
</script>

<style>

</style>
