import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import AOS from 'aos'
// import 'aos/dist/aos.css'

// Pinia config
import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App)

//Emitter Config
import mitt from 'mitt'
export const Emitter = mitt()

app.provide('Emitter', Emitter)
app.use(router)
app.use(pinia)

// scroll reveal config
import ScrollReveal from 'scrollreveal'

ScrollReveal().reveal('.reveal', {
    duration: 900,
    distance: '30px',
    origin: 'bottom',
    delay: 100,
    easing: 'ease',
    reset: false
})

app.mount('#app')
