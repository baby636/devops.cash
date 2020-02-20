<template>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">{{title}}</h1>
                </div>

                <div v-if="pageId === 'dashboard'" class="col-sm-6">
                    <div class="float-sm-right text-right">
                        <strong class="text-info">BU!LD BCH!</strong>
                        <span class="text-secondary">&nbsp;and&nbsp;</span>
                        <strong><a href="https://twitter.com/search?q=%23MakeBitcoinCashAgain" target="_blank">#MakeBitcoinCashAgain</a></strong>

                        <br />
                        <small>
                            <span class="text-secondary">Next <strong class="text-danger">bull market</strong> starts in <strong>78d : 23h : 59m</strong></span>
                            <span class="text-secondary">&nbsp;...&nbsp;</span>
                            <strong>It's time to <span class="text-danger">GO!!</span></strong>
                        </small>
                    </div>
                </div>
                <div v-else class="col-sm-6">
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
