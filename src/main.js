import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import UIcomponents from '@/components/UI/index'

const app = createApp(App)

UIcomponents.forEach(compoment => {
  app.component(compoment.name, compoment)
})

app.use(createPinia())
app.use(router)

app.mount('#app')
