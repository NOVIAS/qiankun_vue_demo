import './public-path.js'
import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import routes from './router'

let router = null
let app = null
let history = null

function render (props = {}) {
  const { container } = props
  // 这里要跟主应用中配置一致
  history = createWebHistory(
    window['__POWERED_BY_QIANKUN__'] ? '/vue3' : '/')
  router = createRouter({
    history,
    routes
  })

  app = createApp(App)
  app.use(router)
  app.mount(container ? container.querySelector('#app') : '#app')
}

if (!window['__POWERED_BY_QIANKUN__']) render()

export async function bootstrap () {
  console.log('[vue3] vue3.0 app bootstraped')
}

export async function mount (props) {
  console.log('[vue3] props from main framework', props)
  render(props)
  // app.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange;
  // app.config.globalProperties.$setGlobalState = props.setGlobalState;
}

export async function unmount () {
  app.unmount()
  app._container.innerHTML = ''
  app = null
  router = null
  // vue3 用来销毁路由实例
  history.destroy()
}
