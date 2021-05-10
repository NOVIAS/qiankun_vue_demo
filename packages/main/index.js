import './index.css'
// 引入qiankun
import { registerMicroApps, start } from 'qiankun'

const apps = [
  {
    name: 'vue2',
    entry: '//localhost:8080',
    // 容器的挂载节点
    container: '#app-main',
    // 子应用的激活规则
    activeRule: '/vue2'
  },
  {
    name: 'vue3',
    entry: '//localhost:8081',
    // 容器的挂载节点
    container: '#app-main',
    // 子应用的激活规则
    activeRule: '/vue3'
  }
]

// 注册应用
registerMicroApps(apps)

// 开启应用
start()
