<template>
    <div class="row">
        <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box">
                <span class="info-box-icon bg-danger elevation-1">
                    <i class="fas fa-chart-line"></i>
                </span>

                <div class="info-box-content">
                    <span class="info-box-text">Financial Health</span>
                    <span class="info-box-number">
                        {{displayPrice}} <small>USD</small>
                        <div class="text-success">
                            <small>
                                <i class="fas fa-arrow-up"></i>
                                4.37% • last 30 days
                            </small>
                        </div>
                    </span>
                </div>
            </div>
        </div>

        <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box mb-3">
                <span class="info-box-icon bg-warning elevation-1">
                    <i class="fas fa-charging-station"></i>
                </span>

                <div class="info-box-content">
                    <span class="info-box-text">Mining Power</span>
                    <span class="info-box-number">
                        4.26TH/s <small>~3.82%</small>
                        <div class="text-success">
                            <small>
                                <i class="fas fa-arrow-up"></i>
                                1.80% • last 30 days
                            </small>
                        </div>
                    </span>
                </div>
            </div>
        </div>

        <!-- fix for small devices only -->
        <div class="clearfix hidden-md-up"></div>

        <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box mb-3">
                <span class="info-box-icon bg-success elevation-1">
                    <i class="fas fa-shopping-cart"></i>
                </span>

                <div class="info-box-content">
                    <span class="info-box-text">Buyers SPEDNing</span>
                    <span class="info-box-number">
                        $388.8K <small>USD</small>
                        <div class="text-success">
                            <small>
                                <i class="fas fa-arrow-up"></i>
                                6.12% • last 30 days
                            </small>
                        </div>
                    </span>
                </div>
            </div>
        </div>

        <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box mb-3">
                <span class="info-box-icon bg-info elevation-1">
                    <i class="fas fa-users"></i>
                </span>

                <div class="info-box-content" @click="goto('/contributors')">
                    <span class="info-box-text">Devs BUIDLing</span>
                    <span class="info-box-number">
                        9 <small class="text-danger">(2 new)</small> |
                        4 <small class="text-danger">(0 new)</small>
                        <div class="text-success">
                            <small>
                                <i class="fas fa-arrow-up"></i>
                                14.82% • last 30 days
                            </small>
                        </div>
                    </span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
/* Import libraries. */
import numeral from 'numeral'

export default {
    data: () => {
        return {
            bitbox: null,
            price: 0,
        }
    },
    computed: {
        displayPrice: function () {
            return numeral(this.price / 100).format('$0.00[00]')
        }
    },
    methods: {
        /**
         * Initialize BITBOX
         */
        initBitbox() {
            console.info('Initializing BITBOX..')

            try {
                /* Initialize BITBOX. */
                this.bitbox = new window.BITBOX()
            } catch (err) {
                console.error(err)
            }
        },

        /**
         * Update Price
         */
        async updatePrice() {
            try {
                const current = await this.bitbox.Price.current('usd')
                console.log('CURRENT PRICE', current)

                this.price = current
            } catch (err) {
                console.error(err)
            }
        },

        /**
         * Goto (Page Location)
         */
        goto(_location) {
            this.$router.push(_location)
        },
    },
    created: function () {
        /* Initialize BITBOX. */
        this.initBitbox()
    },
    mounted: function () {
        /* Update price. */
        this.updatePrice()
    },
}
</script>

<style scoped>
.info-box-content {
    cursor: pointer;
}
</style>
