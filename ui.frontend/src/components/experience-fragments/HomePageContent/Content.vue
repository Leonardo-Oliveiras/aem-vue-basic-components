<template>
  <div id="contentContainer">
    <img id="logoBallHome" src="/content/dam/vue/ballLogoHome.png"/>

    <div id="textsContainer">
            <h1>{{ Title1 }}</h1>
            <h2>{{ subtitle1 }}</h2>

            <h1>{{ Title2 }}</h1>
            <h2>{{ subtitle2 }}</h2>

            <h1>{{ Title3 }}</h1>
            <h2>{{ subtitle3 }}</h2>

            <h1>{{ Title4 }}</h1>
            <h2>{{ subtitle4 }}</h2>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Content',
  props: {
    Title1: { type: String, default: 'Our mission is' },
    subtitle1: { type: String, default: 'Nossa missão é' },
    Title2: { type: String, default: 'to transform the world' },
    subtitle2: { type: String, default: 'transformar o mundo' },
    Title3: { type: String, default: 'building digital experiences' },
    subtitle3: { type: String, default: 'construindo experiências digitais' },
    Title4: { type: String, default: 'that enable our client’s growth' },
    subtitle4: { type: String, default: 'que permitam o crescimento dos nossos clientes' }
  }
}
</script>

<style lang="scss" scoped>

@import "../../stylesUtils.scss";

#contentContainer{
  @include display-flex-row();
  justify-content: end;
  padding: 100px 0 0 0;
  @include for-size(min-769) { padding: 0; }

  #logoBallHome{
    max-height: 47vh;
    position: absolute;
    bottom: 48px;
    left: 0;
      @include for-size(min-769) { max-height: 33vh; }
      @include for-size(min-1024) { max-height: 29vh; }
  }

  #textsContainer{
      @include display-flex-column();
      @include for-size(min-320) { display: none }
      @include for-size(min-481) { display: none }

    h1{
        font-family: 'Poppins';
        font-weight: 700;
        font-size: 64px;
        line-height: 67px;
        margin: 0;
        color: #C12D18;
        text-align: end;
        @include for-size(min-769) { font-size: 30px; line-height: 33px;}
        @include for-size(min-1024) { font-size: 47px; }
    }

    h2{
        font-family: 'Poppins';
        font-weight: 400;
        font-size: 24px;
        line-height: 36px;
        margin: 0;
        margin-bottom: 20px;
        color: #222222;
        text-align: end;
        @include for-size(min-769) { font-size: 20px; line-height: 33px; margin-bottom: 12px; }
    }
  }
}

</style>
