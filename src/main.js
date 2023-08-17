import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//introduce initialization style
import '@/styles/common.scss'

// test interface function
import { getCategory } from '@/apis/testAPI'
getCategory().then(res => {
    console.log(res);
})


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
