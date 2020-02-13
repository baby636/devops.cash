<template>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">{{title}}</h1>
                </div>

                <div v-if="pageId !== 'dashboard'" class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="javascript://" @click="goTo('/')">Dashboard</a></li>
                        <li class="breadcrumb-item active">{{title}}</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        pageId: String
    },
    computed: {
        title: function () {
            switch(this.pageId) {
            case 'contributors':
                return 'Contributors'
            case 'dashboard':
                return 'Dashboard'
            case 'profile':
                return 'Profile'
            case 'projects':
            case 'projects-detail':
                return 'Projects'
            default:
                return 'Unknown Page'
            }
        }
    },
    methods: {
        /**
         * Go To
         *
         * Navigates to a page location (in the router).
         */
        goTo(_location) {
            this.$router.push(_location)
        }
    },
}
</script>

<style scoped>
/*  */
</style>
