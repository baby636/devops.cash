/* Import views. */
import Gallery from '@/views/Projects'
import Detail from '@/views/Projects/Detail'

/* Initialize routes. */
const routes = [
    {
        path: '/projects',
        component: Gallery
    },
    {
        path: '/p/:projectId',
        component: Detail
    },
]

/* Export routes. */
export default routes
