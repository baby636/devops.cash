import Vue from 'vue'
import VueRouter from 'vue-router'

/* Import MAIN components. */
import Dashboard from '@/views/Dashboard'

import Contributors from '@/views/Contributors'
import Profile from '@/views/Profile'
import Projects from '@/views/Projects'
import ProjectsDetail from '@/views/ProjectsDetail'

/* Initialize Vue Router. */
Vue.use(VueRouter)

/**
 * Initialize Routes
 */
const routes = [{
    path: '/',
    component: Dashboard
}, {
    path: '/contributors',
    component: Contributors
}, {
    path: '/profile/:profileId',
    component: Profile
}, {
    path: '/projects',
    component: Projects
}, {
    path: '/projects/:projectId',
    component: ProjectsDetail
}]

/* Export Vue Router. */
export default new VueRouter({
    mode: 'history',
    linkActiveClass: 'active', // TODO: We should localize this to Navbar.vue's scope.
    routes
})
