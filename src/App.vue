<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Welcome to Your Plugin in Vue.js</h1>
    <regex-code-box>/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/</regex-code-box>
  </div>
</template>
<script>
import RegexCodeBox from './components/RegexCodeBox'
export default {
  components: {
    RegexCodeBox
  },
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>