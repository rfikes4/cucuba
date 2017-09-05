
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/styles.scss'
import {TweenMax, Power2, TimelineLite} from "gsap";
// import pixi from 'pixi'
//import p5 from 'p5'
import Howl from 'howler'
// import Flickity from 'flickity'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
