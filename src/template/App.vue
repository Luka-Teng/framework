<template lang="jade">
  #app
    img(src="./assets/logo.png")
    <HelloWorld></HelloWorld>
    <span class="iconfont icon-hunningtujiaobanji"></span>
</template>

<script lang="ts">
// 引入基本模块
import Vue from 'vue'
import Component from 'vue-class-component'

// 引入组件
import HelloWorld from './components/HelloWorld.vue'

// 引入全局css
import './stylus/general.styl'

@Component({
  components: {
    HelloWorld
  }
})

export default class App extends Vue {

}
</script>

<style lang="stylus">
</style>
