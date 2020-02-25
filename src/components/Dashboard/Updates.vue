<template>
    <div class="card">
        <div class="card-header border-transparent">
            <h3 class="card-title">Notable Project Updates</h3>

            <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                </button>

                <button type="button" class="btn btn-tool" data-card-widget="remove">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>

        <div class="card-body p-0">
            <div class="table-responsive">
                <table class="table m-0">
                    <thead>
                        <tr>
                            <th>Commit #</th>
                            <th>Project Name</th>
                            <th class="text-center">Build Status</th>
                            <th class="text-center">Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="update of updates" v-bind:key="update.hashId">
                            <td>
                                <a :href="update.url" target="_blank">{{update.hashId}}</a>
                            </td>
                            <td>
                                {{update.title}}
                                <div class="description">{{update.description}}</div>
                            </td>
                            <td class="text-center">
                                <span class="badge" :class="update.badge">{{update.status}}</span>
                            </td>
                            <td class="text-center">
                                <div class="sparkline">{{update.sparkline}}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="card-footer clearfix">
            <div class="row">
                <div class="col-7">
                    <form action="javascript://" method="post">
                        <div class="input-group">
                            <input type="text" name="message" placeholder="What ru looking for?" class="form-control">

                            <span class="input-group-append">
                                <button type="button" class="btn btn-warning">Search</button>
                            </span>
                        </div>
                    </form>
                </div>

                <div class="col-5">
                    <a href="javascript://" class="btn btn-sm btn-info float-right">
                        View ALL Recent Updates
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            updates: [],
        }
    },
    computed: {
        //
    },
    created: function () {
        this.updates.push({
            hashId: '9627b660',
            url: 'https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/commit/9627b66018a73ccef7419f964fb3b646e03a71d1',
            title: 'Bitcoin Cash Node',
            description: `Merge branch 'rebrand_useragent_and_config' into 'master'`,
            status: 'Errors',
            badge: 'badge-danger',
            sparkline: '6, 4, 10, 19, 16, 5, 18, 13, 20, 17, 8, 2, 12, 3, 9',
        })

        this.updates.push({
            hashId: '581d205e',
            url: 'https://github.com/BitcoinUnlimited/BitcoinUnlimited/commit/581d205e4e254be4a9f3f80c95e140447002e458',
            title: 'BitcoinUnlimited',
            description: `Merge pull request #2015 from sickpig/fix-build-icon`,
            status: 'Building',
            badge: 'badge-success',
            sparkline: '8, 12, 10, 9, 16, 19, 1, 4, 5, 14, 6, 7, 18, 13, 11',
        })

        this.updates.push({
            hashId: '1507ec53',
            url: 'https://gitlab.com/pokkst/crescentcash/-/commit/1507ec53347117185100af1bd21539ad74a06a9c',
            title: 'Crescent Cash',
            description: `Update build.gradle`,
            status: 'Building',
            badge: 'badge-success',
            sparkline: '1, 15, 9, 12, 8, 20, 19, 5, 4, 13, 3, 6, 16, 14, 11',
        })

        this.updates.push({
            hashId: 'e4a7f10e',
            url: 'https://gitlab.com/cashid/protocol-specification/-/commit/e4a7f10efe1da1efc2f7a5a84029c142c3ab11f8',
            title: 'CashID Protocol Specification',
            status: 'Pending',
            description: `Update name for the known MITM risk.`,
            badge: 'badge-warning',
            sparkline: '15, 19, 10, 14, 4, 12, 8, 17, 3, 6, 2, 11, 1, 16, 20',
        })

        this.updates.push({
            hashId: '5158a5bc',
            url: 'https://gitlab.com/GeneralProtocols/electrum-cash/-/commit/5158a5bcf7218cd39f6c08e0069fa1434756b9f6',
            title: 'electrum-cash',
            description: `Fix linting.`,
            status: 'Pending',
            badge: 'badge-warning',
            sparkline: '12, 17, 15, 2, 16, 5, 18, 9, 1, 6, 7, 3, 4, 20, 14',
        })
    },
    mounted: function () {
        /* Set JQuery. */
        const $ = window.$

        // $('.sparkbar').peity('bar', {
        //     width: '100'
        // })

        /* Wait a tick for DOM to initialize. */
        setTimeout(() => {
            $('.sparkline').peity('line', {
                width: '100'
            })
        }, 10)

    },
}
</script>

<style scoped>
.description {
    font-size: 0.7em;
    color: rgba(30, 30, 30, 0.5);

    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    margin-bottom: -10px;
    /* padding-bottom: 0px; */
}
</style>
