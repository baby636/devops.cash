import Vue from 'vue'
import VueRouter from 'vue-router'

/* Import views. */
import Dashboard from '@/views/Dashboard'

/* Import views. */
import community from './community'
import desktop from './desktop'
import profiles from './profiles'
import projects from './projects'
import support from './support'
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
    // {
    //   path: '/dashboard',
    //   name: 'Dashboard',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
    // },
    ...community,
    ...desktop,
    ...profiles,
    ...projects,
    ...support,
    ...workspaces,
]

/* Export Vue Router. */
// NOTE: We're using "hash" mode in development due to problems
//       resolving "dynamic" routes.
export default new VueRouter({
    mode: 'hash', // NOTE: Use 'hash' when running locally.
    // mode: 'history', // NOTE: Use 'hash' when deploying to server.
    // mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash',
    linkActiveClass: 'active', // TODO: We should localize this to Navbar.vue's scope.
    routes
})
