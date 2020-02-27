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
                            <span class="text-secondary">Next <strong class="text-danger">bull market</strong> starts in <strong>{{nextBullRun}}</strong></span>
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
/* Import modules. */
import moment from 'moment'

export default {
    props: {
        pageId: String
    },
    computed: {
        title: function () {
            switch(this.pageId) {
            case 'dashboard':
                return 'Dashboard'

            /* DESKTOP */
            case 'file-mgr':
                return 'File Manager'
            case 'notebook':
                return 'Notebook'

            case 'contributors':
                return 'Contributors'
            case 'profile':
                return 'Profile'
            case 'projects':
            case 'project-detail':
                return 'Projects'
            default:
                return 'Unknown Page'
            }
        },

        /**
         * Next Bull Run (Countdown)
         *
         * NOTE: NO idea of the maths is correct .. I'm so bad :-(
         */
        nextBullRun: function () {
            /* Set halvening date. */
            const halvening = moment([2020, 4, 9])

            /* Calculate remaining (days). */
            const days = halvening.diff(moment(), 'days')
            // console.log('DAYS REMAINING', days)

            /* Calculate remaining (hours). */
            const hours = halvening.diff(moment(), 'hours')
            // console.log('HOURS REMAINING', hours)

            const h = hours - (days * 24)
            // console.log('H REMAINING', h)

            /* Calculate remaining (minutes). */
            const minutes = halvening.diff(moment(), 'minutes')
            // console.log('MINUTES REMAINING', minutes)

            const m = minutes - (days * 24 * 60) - (h * 60)
            // console.log('M REMAINING', m)

            /* Set remaining (formatted) time. */
            const remaining = `${days}d : ${h}h : ${m}m`

            /* Return remaining. */
            return remaining
        },
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
