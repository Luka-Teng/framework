<template lang="jade">
  #app
    img(src="./assets/logo.png")
    <HelloWorld></HelloWorld>
    <span class="iconfont icon-hunningtujiaobanji"></span>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import './stylus/general.styl'

export default {
  components: {
    HelloWorld
  }
}
</script>

<style lang="stylus">
</style>
