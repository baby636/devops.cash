<template>
    <div class="row">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Trending View</h3>

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
                    <div class="d-md-flex">
                        <div class="p-1 flex-fill" style="overflow: hidden">
                            <div class="row">
                                <div class="col">
                                    <a href="https://read.cash/@flipstarter/flipstarter-500k-6-independent-campaigns-0d30c1cf" target="_blank">
                                    <img src="https://i.imgur.com/ZKZ2enw.png" class="img-responsive img-rounded" width="250" /></a>
                                </div>
                                <div class="col">
                                    <a href="https://news.bitcoin.com/wells-fargo/" target="_blank">
                                    <img src="https://i.imgur.com/cBwtMtA.png" class="img-responsive img-rounded" width="250" /></a>
                                </div>
                            </div>
                        </div>

                        <div class="card-pane-right bg-light pt-2 pb-2 pl-4 pr-4">
                            <div class="description-block mb-4">
                                <div class="sparkbar pad" data-color="#fff">90,70,90,70,75,80,70</div>
                                <h5 class="description-header">8390</h5>
                                <span class="description-text">Visits</span>
                            </div>

                            <div class="description-block mb-4">
                                <div class="sparkbar pad" data-color="#fff">90,50,90,70,61,83,63</div>
                                <h5 class="description-header">30%</h5>
                                <span class="description-text">Referrals</span>
                            </div>

                            <div class="description-block">
                                <div class="sparkbar pad" data-color="#fff">90,50,90,70,61,83,63</div>
                                <h5 class="description-header">70%</h5>
                                <span class="description-text">Organic</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-4">

            <div class="info-box mb-3 bg-warning">
                <span class="info-box-icon"><i class="far fa-newspaper"></i></span>

                <div class="info-box-content">
                    <div class="info-box-text">Trending News</div>
                    <div class="info-box-number">
                        <div class="row">
                            <div class="col-4">
                                5,200
                            </div>
                            <div class="col-8">
                                <span class="sparkline">4, 6, 19, 10, 12, 16, 15, 13, 11, 14, 9, 5, 20, 8, 2</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="info-box mb-3 bg-danger">
                <span class="info-box-icon"><i class="fab fa-reddit"></i></span>

                <div class="info-box-content">
                    <div class="info-box-text">Trending Discussions</div>
                    <div class="info-box-number">
                        <div class="row">
                            <div class="col-4">
                                4,381
                            </div>
                            <div class="col-8">
                                <span class="sparkline">7, 6, 11, 12, 14, 8, 15, 13, 18, 16, 19, 20, 17, 5, 10</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="info-box mb-3 bg-info">
                <span class="info-box-icon"><i class="fab fa-twitter"></i></span>

                <div class="info-box-content">
                    <span class="info-box-text">Trending Events</span>
                    <div class="info-box-number row">
                        <div class="row">
                            <div class="col-4">
                                3,921
                            </div>
                            <div class="col-8">
                                <span class="sparkline">7, 9, 8, 20, 15, 14, 13, 10, 17, 16, 6, 11, 18, 19, 5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="info-box mb-3 bg-success">
                <span class="info-box-icon"><i class="fas fa-broadcast-tower"></i></span>

                <div class="info-box-content">
                    <div class="info-box-text">Trending Data</div>
                    <div class="info-box-number row">
                        <div class="row">
                            <div class="col-4">
                                2,050
                            </div>
                            <div class="col-8">
                                <span class="sparkline">6, 19, 14, 18, 17, 6, 13, 12, 10, 11, 8, 15, 7, 20, 5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data: () => {

    },
    mounted: function () {
        /* Set JQuery. */
        const $ = window.$

        /* Wait a tick for DOM to initialize. */
        setTimeout(() => {
            $('.sparkbar').peity('bar', {
                width: '100'
            })

            $('.sparkline').peity('line', {
                width: '100'
            })
        }, 10)

    },
}
</script>

<style scoped>
</style>
