<template>
  <div>

    <header>

      <img id="compassLogo" :src="imageUrl"/>

      <div id="realTimeDate">
        <p id="hour"></p>
        <p id="date"></p>
      </div>

      <div id="weatherStatus">
        <p id="city"></p>
        <div id="iconAndTemp">
          <div id="weatherIcon"></div>
          <p id="temp"></p>
        </div>
      </div>

    </header>

    <section>

      <div id="flexImgTxt">

        <div id="compassText">

          <p id="redText1">{{redText1}}</p>
          <p id="blackText">{{blackText1}}</p>

          <p id="redText">{{redText2}}</p>
          <p id="blackText">{{blackText2}}</p>

          <p id="redText">{{redText3}}</p>
          <p id="blackText">{{blackText3}}</p>

          <p id="redText">{{redText4}}</p>
          <p id="blackText">{{blackText4}}</p>

        </div>

        <img id="compassBallLogoText" :src="compassBallLogo"/>

      </div>

    </section>
       <img id="compassBallLogo" :src="compassBallLogo"/>
    <footer>
      <div id="testFlex">
        <div id="hideMobileFooterElements">
          <p id="textFooter">
            Essa janela do navegador é usada para
            manter sua sessão de autenticação ativa. <br>
            Deixe-a aberta em segundo plano e abra uma
            nova janela para continuar a navegar.
          </p>

          <hr id="borderFooter">

          <p id="textClockerFooter"> Application <br> refresh in </p>

          <div id="countDownDiv">
            <p id="count-down-timer"></p>
          </div>

        </div>

        <button id="btnContinue">
          <p>Continuar Navegando</p>
        </button>

        <button v-on:click="actionLogout()" id="btnLogout">
          <p>Logout</p>
        </button>
    </div>
    </footer>

  </div>
</template>

<script>
// Imports
import './homeScript.js'
export default {
  name: 'homePage',
  props: {
    redText1: {
      type: String
    },
    redText2: {
      type: String
    },
    redText3: {
      type: String
    },
    redText4: {
      type: String
    },
    blackText1: {
      type: String
    },
    blackText2: {
      type: String
    },
    blackText3: {
      type: String
    },
    blackText4: {
      type: String
    }
  },
  data () {
    return {
      imageUrl: '/content/dam/vue/homePageLogo.png',
      compassBallLogo: '/content/dam/vue/ballLogoHome.png'
    }
  },
  methods: {
    actionLogout: function () {
      window.location = 'Compass-Login.html'
      window.localStorage.clear()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./HomePage.scss";
</style>
