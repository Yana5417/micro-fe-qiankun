import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//基座
import { registerMicroApps, start } from 'qiankun'
const apps = [
  {
    name: 'child-vue', // 应用名
    entry: '//localhost:10000', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）
    container: '#vue', // 容器名
    activeRule: '/vue' // 激活的路径
  },
  {
    name: 'child-react',
    entry: '//localhost:20000', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）
    container: '#react',
    activeRule: '/react'
  }
]
registerMicroApps(apps) // 注册应用
start() // 开启应用

Vue.config.productionTip = false // 阻止启动生产消息
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
