/* Import core modules. */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/* Initialize Vuejs. */
new Vue({
    render: h => h(App),
}).$mount('#app')
