<template>
  <div>
    <Header />
    <!-- START HERO AREA -->
    <section class="nft-hero-area d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-md-8 d-flex align-items-center">
            <div class="hero-left">
              <h2
                class="hero-title wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                Discover Digital Art <br />Sell Your Specific
                <span class="nft-text-stroke">NFT</span>
              </h2>
              <p
                class="wow animated fadeIn"
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                Partner with one of the world’s largest retailers to showcase
                your brand and products.
              </p>
              <a
                class="nft-hero-btn nft-highlight-bg-color boxed-btn wow animated fadeInDown"
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
                @click="register"
              >Get Started</a>
<!--              <a-->
<!--                href="create-nft.html"-->
<!--                class="nft-hero-btn style-2 boxed-btn wow animated fadeInDown"-->
<!--                data-wow-duration="2000ms"-->
<!--                data-wow-delay="400ms"-->
<!--              >Create Now</a>-->
            </div>
          </div>
          <div class="col-xl-4 col-md-4">
            <div
              class=""
              data-wow-duration="2000ms"
              data-wow-delay="200ms"
            >
              <img width="350" src="@/assets/images/portfolio-section.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="animate-shape-1">
        <img src="assets/img/animate-shape-1.png" alt="" />
      </div>
      <div class="animate-shape-2">
        <img src="assets/img/animate-shape-3.png" alt="" />
      </div>
      <div class="animate-shape-3">
        <img src="assets/img/animate-shape-2.png" alt="" />
      </div>
      <div class="animate-shape-5">
        <img src="assets/img/animate-shape-4.png" alt="" />
      </div>
      <div class="animate-shape-4">
        <img src="assets/img/animate-shape-4.png" alt="" />
      </div>
      <div class="animate-shape-5">
        <img src="assets/img/animate-shape-4.png" alt="" />
      </div>
    </section>
    <!-- END HERO AREA -->
    <!-- START CREATE AND SELL AREA -->
    <section class="create-and-sell-area black-bg">
      <div class="container">
        <div class="row">
          <div class="d-flex justify-content-center align-items-center mb-50">
            <h1
              class="section-title wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="100ms"
            >
              NFT Data
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-3 col-md-6">
            <div
              class="single-create-sell-item text-center wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="200ms"
            >
              <div class="single-create-sell-item-border text-center">
                <div
                  class="item-number d-flex align-items-center justify-content-center"
                >
                  <span>01</span>
                </div>
                <div class="single-create-sell-item-icon">
<!--                  <img src="assets/img/single-create-sell-item-1.png" alt="" />-->
                </div>
                <h3 class="single-create-sell-item-title">
                  $76 billion
                </h3>
                <p class="single-create-sell-item-desc">
                  24h trading volume on Meta Currency
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div
              class="single-create-sell-item text-center wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="200ms"
            >
              <div class="single-create-sell-item-border text-center">
                <div
                  class="item-number d-flex align-items-center justify-content-center"
                >
                  <span>02</span>
                </div>
                <div class="single-create-sell-item-icon">
<!--                  <img src="assets/img/single-create-sell-item-2.png" alt="" />-->
                </div>
                <h3 class="single-create-sell-item-title">
                  600+
                </h3>
                <p class="single-create-sell-item-desc">
                  Cryptocurrencies listed
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div
              class="single-create-sell-item text-center wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="400ms"
            >
              <div class="single-create-sell-item-border text-center">
                <div
                  class="item-number d-flex align-items-center justify-content-center"
                >
                  <span>03</span>
                </div>
                <div class="single-create-sell-item-icon">
<!--                  <img src="assets/img/single-create-sell-item-3.png" alt="" />-->
                </div>
                <h3 class="single-create-sell-item-title">90 million</h3>
                <p class="single-create-sell-item-desc">
                  Registered users who trust Meta Currency
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div
              class="single-create-sell-item text-center wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="600ms"
            >
              <div class="single-create-sell-item-border text-center">
                <div
                  class="item-number d-flex align-items-center justify-content-center"
                >
                  <span>04</span>
                </div>
                <div class="single-create-sell-item-icon">
<!--                  <img src="assets/img/single-create-sell-item-4.png" alt="" />-->
                </div>
                <h3 class="single-create-sell-item-title"><0.10%</h3>
                <p class="single-create-sell-item-desc">
                  Lowest transaction fees
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END CREATE AND SELL AREA -->
    <!-- START HERO AREA -->
    <section class="nft-hero-area home-2 d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 col-md-9 cust-order wow animated fadeInLeft" data-wow-duration="2000ms" data-wow-delay="200ms">
            <div class="product-collection-box hero-section">
              <div class=""><img src="@/assets/images/download-section.png" alt=""></div>
            </div>
          </div>
          <div class="col-xl-3 col-md-3 d-flex align-items-center wow animated fadeInRight" data-wow-duration="2000ms" data-wow-delay="400ms">
            <div class="" style="width: 100%; display:flex; justify-content: space-between; align-items: center">
              <div>
                <img width="120" height="120" src="@/assets/images/qr-code.png" alt="">
              </div>
              <div class="css-m2egr1">
                <div style="margin-bottom: 4px; font-size: 16px;">
                  Scan to Download
                </div>
                <h3>
                  iOS &amp; Android
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="animate-shape-1"><img src="@/assets/img/animate-shape-1.png" alt=""></div>
      <div class="animate-shape-2"><img src="@/assets/img/animate-shape-3.png" alt=""></div>
      <div class="animate-shape-3"><img src="@/assets/img/animate-shape-2.png" alt=""></div>
      <div class="animate-shape-5"><img src="@/assets/img/animate-shape-2.png" alt=""></div>
      <div class="animate-shape-4"><img src="@/assets/img/animate-shape-4.png" alt=""></div>
      <div class="animate-shape-5"><img src="@/assets/img/animate-shape-4.png" alt=""></div>
    </section>
    <!-- END HERO AREA -->
    <Footer />
  </div>
</template>

<script>

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'HomeView',
  components: {
    Footer,
    Header
  },
  methods: {
    meta() {
      // this.$router.push({
      //   path: '/'
      // })
    },
    login() {
      this.$router.push('/register?login=1')
    },
    register() {
      this.$router.push('/register?login=2')
    },
  }
}
</script>

<style>

</style>
