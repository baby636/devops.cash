/* Import (core) modules. */
import Vue from 'vue'
import Vuex from 'vuex'

/* Import (local) modules. */
import profile from './modules/profile'
import system from './modules/system'

/* Initialize Vuex. */
Vue.use(Vuex)

/* Export store. */
export default new Vuex.Store({
    modules: {
        profile,
        system,
    },
    strict: process.env.NODE_ENV !== 'production'
})
