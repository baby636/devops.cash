/* Import views. */
import CodeEditor from '@/views/Workspaces/CodeEditor'
import GraphicsStudio from '@/views/Workspaces/GraphicsStudio'
import Lab from '@/views/Workspaces/Lab'

/* Initialize routes. */
const routes = [{
    path: '/code-editor',
    component: CodeEditor
}, {
    path: '/graphics-studio',
    component: GraphicsStudio
}, {
    path: '/lab',
    component: Lab
}]

/* Export routes. */
export default routes
