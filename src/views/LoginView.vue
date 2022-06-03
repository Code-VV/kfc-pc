<template>
  <div>
    <Header />

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: 'LoginView',
  components: {Footer, Header},
  data() {
    return {}
  },
  created() {
  },
  methods: {},
}
</script>

<style scoped>

</style>
