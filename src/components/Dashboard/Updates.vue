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
                            <th>Status</th>
                            <th>Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="javascript://">OR9842</a></td>
                            <td>Call of Duty IV</td>
                            <td><span class="badge badge-success">Shipped</span></td>
                            <td>
                                <div class="sparkline">6, 4, 10, 19, 16, 5, 18, 13, 20, 17, 8, 2, 12, 3, 9</div>
                            </td>
                        </tr>
                        <tr>
                            <td><a href="javascript://">OR1848</a></td>
                            <td>Samsung Smart TV</td>
                            <td><span class="badge badge-warning">Pending</span></td>
                            <td>
                                <div class="sparkline">1, 15, 9, 12, 8, 20, 19, 5, 4, 13, 3, 6, 16, 14, 11</div>
                            </td>
                        </tr>
                        <tr>
                            <td><a href="javascript://">OR7429</a></td>
                            <td>iPhone 6 Plus</td>
                            <td><span class="badge badge-danger">Delivered</span></td>
                            <td>
                                <div class="sparkline">8, 12, 10, 9, 16, 19, 1, 4, 5, 14, 6, 7, 18, 13, 11</div>
                            </td>
                        </tr>
                        <tr>
                            <td><a href="javascript://">OR7429</a></td>
                            <td>Samsung Smart TV</td>
                            <td><span class="badge badge-info">Processing</span></td>
                            <td>
                                <span class="sparkline">15, 19, 10, 14, 4, 12, 8, 17, 3, 6, 2, 11, 1, 16, 20</span>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <a href="https://gitlab.com/GeneralProtocols/electrum-cash/-/commit/5158a5bcf7218cd39f6c08e0069fa1434756b9f6" target="_blank">5158a5bc</a>
                            </td>
                            <td>
                                electrum-cash
                            </td>
                            <td>
                                <span class="badge badge-warning">Pending</span>
                            </td>
                            <td>
                                <div>
                                    <span class="sparkline">12, 17, 15, 2, 16, 5, 18, 9, 1, 6, 7, 3, 4, 20, 14</span>
                                </div>
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
    mounted: function () {
        /* Set JQuery. */
        const $ = window.$

        // $('.sparkbar').peity('bar', {
        //     width: '100'
        // })

        $('.sparkline').peity('line', {
            width: '100'
        })
    },
}
</script>

<style scoped>
/*  */
</style>
