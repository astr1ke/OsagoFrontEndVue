import Vue from 'vue'
import App from './App'
import RightColumnComponent from './components/upload/rightColumn.vue'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App)
}).$mount('#app')

new Vue({
    el:'#rightColumnComponent',
    render: h => h(RightColumnComponent)
})
