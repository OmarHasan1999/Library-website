import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import './css/HomeSection.css'
import './css/footers.css'
import './css/Header.css'
import './css/navPage.css'
import './css/mainPage.css'
import './css/quotesSection.css'
import './css/reviewsSection.css'
import './css/booksSection.css'
import './css/detailSection.css'


const app = createApp(App)

app.use(router)

app.mount('#app')
