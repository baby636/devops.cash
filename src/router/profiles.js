/* Import views. */
import Contributors from '@/views/Profiles/Contributors'
import Detail from '@/views/Profiles/Detail'

/* Initialize routes. */
const routes = [
    {
        path: '/contributors',
        component: Contributors
    },
    {
        path: '/u/:profileId',
        component: Detail
    },
]

/* Export routes. */
export default routes
