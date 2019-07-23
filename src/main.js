import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        add(state) {
            state.count++;
        },
        minus(state, index) {
            state.count -=index;
        }
    }
})


new Vue({
    render: h => h(App),
    store
}).$mount('#app')
