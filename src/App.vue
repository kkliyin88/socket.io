<template>
  <div id="app">
   <header>
    <!-- router-link 定义点击后导航到哪个路径下 -->
    <router-link to="/info">info</router-link>
    <router-link to="/job">job</router-link>
    </header>
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  export default {
  name: 'App'
 }
</script>
<style scoped>
</style>
