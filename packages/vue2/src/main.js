import './public-path'
import VueRouter from 'vue-router'
import Vue from 'vue'
import App from './App.vue'
import routes from './router'

Vue.config.productionTip = false

let router = null
let instance = null

function render (props = {}) {
  const { container } = props

  router = new VueRouter({
    // 这里要跟主应用中配置一致
    base: window['__POWERED_BY_QIANKUN__'] ? '/vue2' : '/',
    mode: 'history',
    routes
  })

  // 当前 vue 组件实例
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if (!window['__POWERED_BY_QIANKUN__']) {
  render()
}

/**
 * qiankun 生命周期函数
 * bootstrap 只会在初始化的时候执行一次
 * 通常是一些全局变量初始化工作
 * 应用级别的缓存不会被销毁
 * */
export async function bootstrap () {
  console.log('vue2 app bootstrap')
}

/**
 * mount 方法在每次挂载的时候都会执行
 * 通常在这个方法中触发函数的渲染方法
 * @returns {Promise<void>}
 */
export async function mount (props) {
  // 接收从主应用中传递过来的参数
  console.log(props)
  // 每次挂载执行挂载方法
  render(props)
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update (props) {
  console.log('update props', props)
}

/**
 * 当子应用每次被切换/卸载的时候触发
 * 通常在这种情况下，会卸载子应用程序的应用程序实例
 * @returns {Promise<void>}
 */
export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  router = null
  console.log('vue2 已经卸载')
}
