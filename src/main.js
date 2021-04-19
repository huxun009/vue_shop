import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js'

//导入字体图标
import './assets/fonts/iconfont.css'



//导入全局样式表
import './assets/css/global.css'
Vue.use(ElementUI);

import axios from "axios";
Vue.prototype.$http = axios;
//配置请求的根路径
axios.defaults.baseURL='https://www.liulongbin.top:8888/api/private/v1/'
// axios.defaults.baseURL='http://www.ysqorz.top:8888/api/private/v1/'
axios.interceptors.request.use(config=>{
  console.log(config);
  config.headers.authorization =window.sessionStorage.getItem('token')
  //在最后必须返回config
  return config
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
