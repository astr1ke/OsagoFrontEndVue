import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import MainPage from './MainPage'
import HeaderComponent from './components/layouts/header'


Vue.use(VueRouter)
Vue.config.productionTip = false


const routes = [
    { path: '/download', name: 'download', components: {
            comp1: HeaderComponent,
            comp2: App }
    },
    { path: '/', name: 'main', components: {
        comp1: HeaderComponent,
        comp2: MainPage }
    }
]


const router = new VueRouter({
    mode: 'history',
    routes
})


new Vue({
    router
}).$mount('#router')

