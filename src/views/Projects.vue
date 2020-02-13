<template>
    <main>
        <!-- Header -->
        <Header pageId="projects" />

        <!-- Page Section -->
        <section class="content">
            <div class="container-fluid">

                <!-- Default box -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Projects</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                                <i class="fas fa-minus"></i></button>
                            <button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                                <i class="fas fa-times"></i></button>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <table class="table table-striped projects">
                            <thead>
                                <tr>
                                    <th style="width: 1%">
                                        #
                                    </th>
                                    <th style="width: 20%">
                                        Project Name
                                    </th>
                                    <th style="width: 30%">
                                        Contributors
                                    </th>
                                    <th>
                                        Progress
                                    </th>
                                    <th style="width: 8%" class="text-center">
                                        Status
                                    </th>
                                    <th style="width: 20%" class="text-right">
                                        Links
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr @click="openProject('devops-cash')">
                                    <td>
                                        1
                                    </td>
                                    <td>
                                        <a>
                                            DevOps.cash
                                        </a>
                                        <br/>
                                        <small>
                                            Created 2020.02.06
                                        </small>
                                    </td>
                                    <td>
                                        <ul class="list-inline">
                                            <li class="list-inline-item" @click.stop="openProfile('nyusternie')">
                                                <img alt="Avatar" class="table-avatar" src="@/assets/img/avatar.png">
                                            </li>
                                            <li class="list-inline-item">
                                                <img alt="Avatar" class="table-avatar" src="@/assets/img/avatar2.png">
                                            </li>
                                            <li class="list-inline-item">
                                                <img alt="Avatar" class="table-avatar" src="@/assets/img/avatar4.png">
                                            </li>
                                            <li class="list-inline-item">
                                                <img alt="Avatar" class="table-avatar" src="@/assets/img/avatar3.png">
                                            </li>
                                            <li class="list-inline-item">
                                                <img alt="Avatar" class="table-avatar" src="@/assets/img/avatar5.png">
                                            </li>
                                            <li class="list-inline-item">
                                                +4
                                            </li>
                                        </ul>
                                    </td>
                                    <td class="project_progress">
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-yellow" role="progressbar" aria-volumenow="15" aria-volumemin="0" aria-volumemax="100" style="width: 15%">
                                            </div>
                                        </div>
                                        <small>
                                            15% Complete
                                        </small>
                                    </td>
                                    <td class="project-state">
                                        <span class="badge badge-warning">Started</span>
                                    </td>
                                    <td class="project-actions text-right">
                                        <Links />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2
                                    </td>
                                    <td>
                                        <a>
                                            Nito.cash
                                        </a>
                                        <br/>
                                        <small>
                                            Created 2020.01.01
                                        </small>
                                    </td>
                                    <td>
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <img alt="Avatar" class="table-avatar" src="@/assets/img/avatar.png">
                                            </li>
                                            <li class="list-inline-item">
                                                <img alt="Avatar" class="table-avatar" src="@/assets/img/avatar4.png">
                                            </li>
                                        </ul>
                                    </td>
                                    <td class="project_progress">
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-green" role="progressbar" aria-volumenow="60" aria-volumemin="0" aria-volumemax="100" style="width: 60%">
                                            </div>
                                        </div>
                                        <small>
                                            60% Complete
                                        </small>
                                    </td>
                                    <td class="project-state">
                                        <span class="badge badge-success">BUIDLing</span>
                                    </td>
                                    <td class="project-actions text-right">
                                        <Links />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        3
                                    </td>
                                    <td>
                                        <a>
                                            Be.cash
                                        </a>
                                        <br/>
                                        <small>
                                            Created 2019.10.23
                                        </small>
                                    </td>
                                    <td>
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <img alt="Avatar" class="table-avatar" src="@/assets/img/avatar5.png">
                                            </li>
                                        </ul>
                                    </td>
                                    <td class="project_progress">
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-green" role="progressbar" aria-volumenow="90" aria-volumemin="0" aria-volumemax="100" style="width: 90%">
                                            </div>
                                        </div>
                                        <small>
                                            90% Complete
                                        </small>
                                    </td>
                                    <td class="project-state">
                                        <span class="badge badge-success">BUIDLing</span>
                                    </td>
                                    <td class="project-actions text-right">
                                        <Links />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        4
                                    </td>
                                    <td>
                                        <a>
                                            Causes.cash
                                        </a>
                                        <br/>
                                        <small>
                                            Created 2020.02.01
                                        </small>
                                    </td>
                                    <td>
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <img alt="Avatar" class="table-avatar" src="@/assets/img/avatar.png">
                                            </li>
                                        </ul>
                                    </td>
                                    <td class="project_progress">
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-red" role="progressbar" aria-volumenow="5" aria-volumemin="0" aria-volumemax="100" style="width: 12%">
                                            </div>
                                        </div>
                                        <small>
                                            5% Complete
                                        </small>
                                    </td>
                                    <td class="project-state">
                                        <span class="badge badge-danger">Planning</span>
                                    </td>
                                    <td class="project-actions text-right">
                                        <Links />
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div><!--/. container-fluid -->
        </section>
    </main>
</template>

<script>
/* Import modules. */
import superagent from 'superagent'

/* Import components. */
import Header from '@/components/Header.vue'

/* Import (local) components. */
import { Links } from '@/components/Projects'

export default {
    components: {
        Header,

        Links,
    },
    data: () => {
        return {
            projects: null
        }
    },
    methods: {
        openProfile(_profileId) {
            this.$router.push(`/profile/${_profileId}`)
        },

        openProject(_projectId) {
            this.$router.push(`/projects/${_projectId}`)
        },
    },
    created: function () {
        /* Set api endpoint. */
        // TODO Move to vuex store.
        const ENDPOINT = 'https://api.devops.cash/v1'

        superagent
            .get(ENDPOINT + '/projects')
            // .send({ name: 'Manny', species: 'cat' }) // sends a JSON post body
            // .set('X-API-Key', 'foobar')
            .set('accept', 'json')
            .end((err, res) => {
                if (err) {
                    return console.error('API ERROR:', err)
                }

                console.log('API RESULT', res)

                /* Set projects. */
                this.projects = res.body
            })
    },
    mounted: function () {
        //
    }
}
</script>

<style scoped>
tbody tr {
    cursor: pointer;
}
</style>
