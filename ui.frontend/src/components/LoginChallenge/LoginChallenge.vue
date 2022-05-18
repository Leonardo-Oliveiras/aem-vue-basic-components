<template>
  <div id="divLogin">

      <div id="loginSection" >
        <img id="compassLogo" :src="imageUrl"/>

          <p id="__p-1"> {{title}} </p>
          <p id="__p-2"> {{text}} </p>
          <p id="__p-3"> {{loginTitle}} </p>

          <input type="text" class="inputCommon" placeholder="Usuário" id="inputLoginUser"/>
          <input type="password" class="inputCommon" placeholder="Senha" id="inputLoginPassword"/>
          <p id="errorMessage">{{errorMessage}}</p>
          <button v-on:click="loginValidation()" id="btnLogin">{{buttonName}}</button>
      </div>

      <img id="pcImg" :src="pcImgUrl"/>
    </div>

</template>

<script>
// Imports
export default {
  name: 'LoginChallenge',
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    },
    loginTitle: {
      type: String
    },
    buttonName: {
      type: String
    },
    errorMessage: {
      type: String
    }
  },
  data () {
    return {
      imageUrl: '/content/dam/vue/loginLogo.png',
      pcImgUrl: '/content/dam/vue/desktopImage.png'
    }
  },
  methods: {
    loginValidation: function () {
      const user = document.getElementById('inputLoginUser').value
      const password = document.getElementById('inputLoginPassword').value

      if (user === 'admin' && password === 'admin') {
        window.location = 'home-page.html'
      } else {
        const errorMessage = document.getElementById('errorMessage')
        errorMessage.style.color = '#E9B425'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./LoginChallenge.scss";
</style>
