import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// FONTAWESOME CSS
import './assets/css/all.min.css'
import './assets/css/fontawesome.min.css'
// BOOTSTRAP CSS
import './assets/css/bootstrap.min.css'
// SLICKNAV CSS
import './assets/css/slicknav.min.css'
// SLICK SLIDER
import './assets/css/slick.css'
import './assets/css/slick-theme.css'
// ANIMATION CSS
import './assets/css/animate.min.css'
// CUSTOM ANIMATION CSS
import './assets/css/custom-animation.css'
// CUSTOM STYLE CSS
import './assets/css/style.css'
// RESPONSIVE CSS
import './assets/css/responsive.css'
// CUSTOM STYLE2 CSS
import './assets/css/style2.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
