<template>
  <div id="headerContainer">
      <img :src="compassLogoHome" alt="Compass logo image" />
      <HeaderMomentNow/>
      <HeaderWeatherNow/>
  </div>
</template>

<script>
import HeaderMomentNow from './HeaderMomentNow.vue'
import HeaderWeatherNow from './HeaderWeatherNow.vue'

export default {
  components: { HeaderMomentNow, HeaderWeatherNow },
  name: 'Header',
  data () {
    return {
      compassLogoHome: '/content/dam/vue/homePageLogo.png'
    }
  }
}
</script>

<style lang="scss" scoped>

@import "../../stylesUtils.scss";

#headerContainer{
  @include display-flex-row();
  justify-content: space-between;
  align-items: flex-start;
}
img{
  @include for-size(min-320) { max-width: 58vw; }
  @include for-size(min-481) { max-width: 58vw; }
}
</style>
