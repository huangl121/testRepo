import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'



// 使用element-ui
Vue.use(ElementUI)
Vue.use(VueAxios,axios)

// 环境配置，是否为生成环境
// false为开发环境，Vue会提供很多警告，方便调试代码
// true为生成环境，Vue会提供很少的警告
Vue.config.productionTip = process.env.NODE_ENV === 'production'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
