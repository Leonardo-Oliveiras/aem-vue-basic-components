<template>
<div id="footerTimerButton">
  <div id="footerTimerContainer">
      <p id="footerTextTimer">Application refresh in</p>
      <div id="footerTimerSeconds">
        <p> {{timer}} </p>
        <h1>seconds</h1>
      </div>
  </div>
    <div id="footerButtonsContainer">
      <button id="btnContinue"><p>Continue</p></button>
      <button id="btnLogout" ><p>Logout</p></button>
    </div>
</div>

</template>

<script>

export default {
  name: 'FooterTimer',
  data () {
    return {
      timer: 600
    }
  },
  watch: {
    timer: {
      handler (value) {
        if (value === 600) {
          setTimeout(() => {
            this.timer = 599
          }, 1000)
        } else if (value > 0) {
          setTimeout(() => {
            this.timer--
          }, 1000)
        } else if (value === 0) {
          window.location = '/content/vue/vue/404-Challenge-Page.html'
        }
      },
      immediate: true
    }
  }
}

</script>

<style lang="scss" scoped>

@import "../../stylesUtils.scss";

#footerTimerButton{
  display: flex;
  height: 100%;
}

#footerTimerContainer{
  @include display-flex-row();
  @include for-size(min-320) { display: none; }
  @include for-size(min-481) { display: none; }

  #footerTextTimer{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: right;
    color: #FFFFFF;
    max-width: 7vw;
    margin: 0 10px;
    @include for-size(min-769) { font-size: 12px; max-width: 8vw; margin: 0;}
  }

  #footerTimerSecondsContainer{
    @include display-flex-column();
  }

  #footerTimerSeconds{
    @include display-flex-column();
    p{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      text-align: center;
      color: #FFFFFF;
      line-height: 1;
      margin: 0 35px;
      @include for-size(min-769) { font-size: 30px; }
    }
    h1{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      text-align: center;
      color: #FFFFFF;
      margin: 0;
      @include for-size(min-769) { font-size: 11px; }
    }
  }
}

#footerButtonsContainer{
  @include display-flex-row();
  @include for-size(min-320) { flex-direction: row-reverse; }
  @include for-size(min-481) { flex-direction: row-reverse; }

  #btnContinue{
    height: 100%;
    background: #FFFFFF;
    border: none;
    cursor: pointer;
    p{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      text-align: center;
      color: #C13216;
      margin: 0 108px;
      max-width: 24vw;
      @include for-size(min-769) { margin: 0; }
    }
  }

  #btnLogout{
    height: 100%;
    border: none;
    background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
    cursor: pointer;
    p{
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    color: #FFFFFF;
    align-items: center;
    justify-content: center;
    margin: 0 28px;
      @include for-size(min-769) { margin: 0; }
    }
  }
}

</style>
