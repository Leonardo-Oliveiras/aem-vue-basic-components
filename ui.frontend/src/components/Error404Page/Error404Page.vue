<template>
<div id="container-main">
  <header>{{ headerTitle }}</header>
  <main>
    <div id="container-left">
      <img :src="imageUrl" alt="Scarecrow image" />
    </div>
    <div id="container-right">
      <h1> {{ title }} </h1>
      <p> {{ text }} </p>
      <button v-on:click="backToHomePage()"> {{ buttonLabel }} </button>
    </div>
  </main>
  <footer> {{footerText}} </footer>
</div>
</template>

<script>
// Imports
export default {
  name: 'Error404Page',
  props: {
    imageUrl: { type: String, default: 'Insert the image path to show it' },
    title: { type: String, default: 'I have bad news for you' },
    text: { type: String, default: 'The page you are looking for might be removed or is temporarily unavailable' },
    buttonLabel: { type: String, default: 'Back to homepage' },
    headerTitle: { type: String, default: '404 not found' },
    footerText: { type: String, default: 'created by Leonardo - devChallenges.io' }
  },
  methods: {
    backToHomePage: function () {
      window.location = 'Compass-Login.html'
    }
  }
}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;600;700&family=Space+Mono:wght@400;700&display=swap');

@import "../stylesUtils.scss";

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    #container-main{
      width: 100vw;
      @include display-flex-column();
    }
  header{
      font-family: 'Inconsolata';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 25px;
      letter-spacing: -0.08em;
      text-transform: uppercase;
      color: #333333;
      padding: 30px;
    }
  main{
    @include display-flex-row;
    width: 100vw;
    margin: 5% 0;
      @include for-size(min-320) { @include display-flex-column(); }
      @include for-size(min-481) { @include display-flex-column(); }
      @include for-size(min-769) { @include display-flex-column(); }
    #container-left {
      width: 50%;
      height: 100%;
      @include display-flex-row;
      img {
        max-width: 35vw;
          @include for-size(min-320) { max-width: 60vw; }
          @include for-size(min-481) { max-width: 60vw; }
          @include for-size(min-769) { max-width: 46vw; }
          @include for-size(min-1024) { max-width: 46vw; }
      }
    }
    #container-right {
      @include display-flex-column;
      gap: 3vw;
      h1 {
        max-width: 35vw;
        font-family: Space Mono;
        font-size: 64px;
        font-weight: 700;
        line-height: 95px;
        letter-spacing: -0.035em;
        text-align: left;
        margin: 0;
        @include for-size(min-320) { max-width: 62vw; font-size: 44px; line-height: 54px;}
        @include for-size(min-481) { max-width: 72vw; font-size: 44px; line-height: 54px;}
        @include for-size(min-769) { max-width: 35vw; font-size: 32px; line-height: 40px; }
        @include for-size(min-1024) { max-width: 35vw; font-size: 34px; line-height: 40px; }
      }
      p {
        max-width: 23vw;
        font-family: Space Mono;
        font-size: 24px;
        font-weight: 400;
        line-height: 36px;
        letter-spacing: -0.035em;
        text-align: left;
        margin: 0;
        @include for-size(min-320) { max-width: 70vw; font-size: 18px; line-height: 27px; margin: 0 0 40px 0;}
        @include for-size(min-481) { max-width: 70vw; font-size: 18px; line-height: 27px; margin: 0 0 40px 0;}
        @include for-size(min-769) { max-width: 33vw; font-size: 16px; line-height: 36px;}
      }
      button {
        width: 216px;
        height: 68px;
        background: #333333;
        color: #fff;
        font-family: Space Mono;
        font-size: 14px;
        font-weight: 700;
        line-height: 21px;
        letter-spacing: -0.035em;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
  }
  footer{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #BDBDBD;
  }
}

</style>
