<template>
  <div id="divLogin">

    <div id="leftDiv">

      <div id="textSection" >
        <p id="__p-1"> {{title}} </p>
        <p id="__p-2"> {{text}} </p>
        <p id="__p-3"> {{loginTitle}} </p>
        <input type="text" class="inputCommon" placeholder="Usuário" id="inputLoginUser"/>
        <input type="text" class="inputCommon" placeholder="Senha" id="inputLoginPassword"/>

        <p id="errorMessage">{{errorMessage}}</p>

        <button id="btnLogin">{{buttonName}}</button>
      </div>
    </div>

    <div id="rightDiv">
      <img id="imageUrl" :src="imageUrl"/>
    </div>

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
    // imageUrl: {
    //   type: String
    // },
    errorMessage: {
      type: String
    }
  },
  data () {
    return {
      imageUrl: '/content/dam/vue/loginLogo.png'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./LoginChallenge.scss";
</style>
