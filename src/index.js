import RegexCodeBox from './components/RegexCodeBox.vue'
const version = '__VERSION__'

const install = Vue => {
  /*
   * NOTE:
   *   if you need to extend Vue contstructor, you can extend it in here.
   */
   Vue.component("VueRegexColorize", RegexCodeBox);
  /*
   * NOTE:
   *  somthing implementation here ...
   */
}

const plugin = {
  install,
  version
}

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
