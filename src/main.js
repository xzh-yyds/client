import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
// import axios from 'axios'
import * as echarts from 'echarts'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard, faPalette, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHatWizard)
library.add(faPalette)
library.add(faGithub)
library.add(faArrowRightLong)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(ElementUI)
Vue.config.productionTip = false
// Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts

// axios.defaults.baseURL = "http://124.220.17.130"

// // request 拦截器
// // 可以自请求发送前对请求做一些处理
// // 比如统一加token，对请求参数统一加密
// axios.interceptors.request.use(config => {
//     config.headers['Content-Type'] = 'application/json;charset=utf-8';

//     // config.headers['token'] = user.token;  // 设置请求头
//     return config
//   }, error => {
//     return Promise.reject(error)
// });

// // response 拦截器
// // 可以在接口响应后统一处理结果
// axios.interceptors.response.use(
//   response => {
//     let res = response.data;
//     // 如果是返回的文件
//     if (response.config.responseType === 'blob') {
//       return res
//     }
//     // 兼容服务端返回的字符串数据
//     if (typeof res === 'string') {
//       res = res ? JSON.parse(res) : res
//     }
//     return res;
//   },
//   error => {
//     console.log('err' + error) // for debug
//     return Promise.reject(error)
//   }
// )



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
