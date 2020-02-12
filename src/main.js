/* Import core modules. */
import Vue from 'vue'
import App from './App.vue'

/* Import (local) modules. */
import router from './router'

/* Set production flag. */
Vue.config.productionTip = false

/* Initialize Vuejs. */
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
