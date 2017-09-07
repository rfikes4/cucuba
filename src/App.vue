<template>
  <div id="app">
    <!-- <app-nav></app-nav> -->
     <!-- <transition :duration="{ enter:enter, leave:leave }" mode="out-in"> -->
      <router-view></router-view>
    <!-- </transition> -->
    <!-- <div class="bg"></div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      // enter: 0,
      // leave: 1000
    }
  },
  watch: {
    '$route' (to, from) {
      // window.scrollTo(0,0);
    }
  },
  mounted() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // return
    }
  }
}
</script>

<style lang="scss">
