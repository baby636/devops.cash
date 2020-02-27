/* Import views. */
import FileManager from '@/views/Desktop/FileManager'
import Notebook from '@/views/Desktop/Notebook'

/* Initialize routes. */
const routes = [
    {
        path: '/file-mgr',
        component: FileManager
    },
    {
        path: '/notebook',
        component: Notebook
    },
]

/* Export routes. */
export default routes
