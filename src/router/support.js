/* Import views. */
import Babel from '@/views/Support/Babel'
import BUIDLing from '@/views/Support/BUIDLing'
import FAQ from '@/views/Support/FAQ'
import Slack from '@/views/Support/Slack'
import Tickets from '@/views/Support/Tickets'
import Tutorials from '@/views/Support/Tutorials'

/* Initialize routes. */
const routes = [
    {
        path: '/babel',
        component: Babel
    },
    {
        path: '/buidling',
        component: BUIDLing
    },
    {
        path: '/faq',
        component: FAQ
    },
    {
        path: '/slack',
        component: Slack
    },
    {
        path: '/tickets',
        component: Tickets
    },
    {
        path: '/tutorials',
        component: Tutorials
    },
]

/* Export routes. */
export default routes
