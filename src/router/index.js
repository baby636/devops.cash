import Vue from 'vue'
import VueRouter from 'vue-router'

/* Import MAIN components. */
import Dashboard from '@/views/Dashboard'

/* DESKTOP */
import FileManager from '@/views/Desktop/FileManager'
import Notebook from '@/views/Desktop/Notebook'

import Contributors from '@/views/Contributors'
import Profile from '@/views/Profile'
import Projects from '@/views/Projects'
import ProjectDetail from '@/views/ProjectDetail'

/* Initialize Vue Router. */
Vue.use(VueRouter)

/**
 * Initialize Routes
 */
const routes = [{
    path: '/',
    component: Dashboard

/* DESKTOP */
}, {
    path: '/file-mgr',
    component: FileManager
}, {
    path: '/notebook',
    component: Notebook

}, {
    path: '/contributors',
    component: Contributors
}, {
    path: '/u/:profileId',
    component: Profile
}, {
    path: '/projects',
    component: Projects
}, {
    path: '/p/:projectId',
    component: ProjectDetail
}]

/* Export Vue Router. */
// NOTE: We're using "hash" mode in development due to problems
//       resolving "dynamic" routes.
export default new VueRouter({
    mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash',
    linkActiveClass: 'active', // TODO: We should localize this to Navbar.vue's scope.
    routes
})
