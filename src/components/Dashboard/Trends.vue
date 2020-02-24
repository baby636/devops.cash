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
                            <!-- Map will be created here -->
                            <div id="world-map-markers" style="height: 325px; overflow: hidden">
                                <div class="map"></div>
                            </div>
                        </div>

                        <div class="card-pane-right bg-success pt-2 pb-2 pl-4 pr-4">
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
                    <span class="info-box-text">Trending News</span>
                    <span class="info-box-number">5,200</span>
                </div>
            </div>

            <div class="info-box mb-3 bg-danger">
                <span class="info-box-icon"><i class="fab fa-reddit"></i></span>

                <div class="info-box-content">
                    <span class="info-box-text">Trending Discussions</span>
                    <span class="info-box-number">4,381</span>
                </div>
            </div>

            <div class="info-box mb-3 bg-info">
                <span class="info-box-icon"><i class="fab fa-twitter"></i></span>

                <div class="info-box-content">
                    <span class="info-box-text">Trending Events</span>
                    <span class="info-box-number">3,921</span>
                </div>
            </div>

            <div class="info-box mb-3 bg-success">
                <span class="info-box-icon"><i class="fas fa-broadcast-tower"></i></span>

                <div class="info-box-content">
                    <span class="info-box-text">Trending Data</span>
                    <span class="info-box-number">2,050</span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    //
}
</script>

<style scoped>
/*  */
</style>
