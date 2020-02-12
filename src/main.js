/* Import core modules. */
import Vue from 'vue'
import App from './App.vue'

/* Import router. */
import VueRouter from 'vue-router'

/* Initialize router. */
Vue.use(VueRouter)

/* Set production flag. */
Vue.config.productionTip = false

/* Initialize Vuejs. */
new Vue({
    render: h => h(App),
}).$mount('#app')
