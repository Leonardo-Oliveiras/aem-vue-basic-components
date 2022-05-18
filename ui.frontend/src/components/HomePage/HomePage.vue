<template>
  <div id="homeContainer">
      <Header/>
      <Content/>
      <Footer/>
  </div>
</template>

<script>
import Header from '../experience-fragments/HomePageHeader/Header.vue'
import Content from '../experience-fragments/HomePageContent/Content.vue'
import Footer from '../experience-fragments/HomePageFooter/Footer.vue'
export default {
  components: { Header, Content, Footer },
  name: 'HomePage'
}
</script>

<style lang="scss" scoped>

@import "../stylesUtils.scss";

#homeContainer{
  @include display-flex-column();
}

</style>
