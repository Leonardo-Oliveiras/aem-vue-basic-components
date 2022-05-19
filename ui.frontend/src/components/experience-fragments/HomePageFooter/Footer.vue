<template>
  <div id="footerContainer">
    <div id="footerTextFlex">
      <p id="footerText">Keep this window open to continue logged in</p>
      <hr/>
    </div>
    <FooterTimer/>
  </div>
</template>

<script>
import FooterTimer from './FooterTimer.vue'
export default {
  components: { FooterTimer },
  name: 'Footer'
}
</script>

<style lang="scss" scoped>

@import "../../stylesUtils.scss";

#footerContainer{
  @include display-flex-row();
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 10vh;
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
  @include for-size(min-320) { background: white; }
  @include for-size(min-481) { background: white; }
  #footerTextFlex{
    @include display-flex-row();
    @include for-size(min-320) { display: none; }
    @include for-size(min-481) { display: none; }
  }
  #footerText{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: right;
    color: #FFFFFF;
    max-width: 74vh;
    margin: 0;
    margin-left: 50px;
    @include for-size(min-769) { font-size: 8px; }
  }
  hr{
    border: 1px solid #FFFFFF;
    margin: 0 20px;
    height: 6vh;
  }
}
</style>
