import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import UploadPage from './components/UploadPage'
import MainPage from './components/MainPage'
import HeaderComponent from './components/layouts/header'
import NewsComponent from './components/News'
import CalcOsago from './components/CalcOsago'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false


const routes = [
    {   path: '/download',
        name: 'download',
        components: {
            comp1: HeaderComponent,
            comp2: UploadPage
        }
    },
    {   path: '/',
        name: 'main',
        components: {
            comp1: HeaderComponent,
            comp2: MainPage
        }
    },
    {   path: '/news/:idNews',
        name: 'news',
        components:{
            comp1: HeaderComponent,
            comp2: NewsComponent
        },
        props: {
            comp1: true,
            comp2: true
        }
    },
    {   path: '/calc-osago',
        name: 'calc-osago',
        components: {
            comp1: HeaderComponent,
            comp2: CalcOsago
        }
    }
]

const store = new Vuex.Store({
    state: {
        newsData: []
    },
    mutations: {

    }
})

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})


new Vue({
    store,
    router
}).$mount('#router')

