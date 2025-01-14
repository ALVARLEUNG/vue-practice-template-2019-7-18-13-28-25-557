import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import store from './store/store'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
    render: h => h(App),
    store
}).$mount('#app')
