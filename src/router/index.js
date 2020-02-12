import Vue from 'vue'
import VueRouter from 'vue-router'

/* Import MAIN components. */
import Dashboard from '@/views/Dashboard'
import Projects from '@/views/Projects'

/* Initialize Vue Router. */
Vue.use(VueRouter)

/**
 * Initialize Routes
 */
const routes = [{
    path: '/',
    component: Dashboard
}, {
    path: '/projects',
    component: Projects
}]

/* Export Vue Router. */
export default new VueRouter({
    mode: 'history',
    routes
})
