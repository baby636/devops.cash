import Vue from 'vue'
import VueRouter from 'vue-router'

/* Import views. */
import Dashboard from '@/views/Dashboard'

/* Import views. */
import community from './community'
import desktop from './desktop'
import profiles from './profiles'
import projects from './projects'
import workspaces from './workspaces'

/* Initialize Vue Router. */
Vue.use(VueRouter)

/**
 * Initialize Routes
 */
const routes = [
    {
        path: '/',
        component: Dashboard
    },
    ...community,
    ...desktop,
    ...profiles,
    ...projects,
    ...workspaces,
]

/* Export Vue Router. */
// NOTE: We're using "hash" mode in development due to problems
//       resolving "dynamic" routes.
export default new VueRouter({
    mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash',
    linkActiveClass: 'active', // TODO: We should localize this to Navbar.vue's scope.
    routes
})
