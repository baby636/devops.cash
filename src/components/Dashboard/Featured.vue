<template>
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Featured Projects</h3>

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
            <ul class="products-list product-list-in-card pl-2 pr-2">
                <li class="item" v-for="feature of featured" v-bind:key="feature.url">
                    <div class="product-img">
                        <img :src="feature.imageurl" alt="Product Image" class="img-size-50 img-rounded">
                    </div>

                    <div class="product-info">
                        <a :href="feature.url" target="_blank" class="product-title">
                            {{feature.title}}
                            <span class="badge badge-secondary float-right">{{feature.specs}}</span>
                        </a>

                        <span class="product-description">
                            {{feature.description}}
                        </span>
                    </div>
                </li>

            </ul>
        </div>

        <div class="card-footer text-center">
            <a href="javascript://" class="uppercase">View All Projects</a>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            featured: []
        }
    },
    created: function () {
        this.featured.push({
            url: 'https://github.com/gcash/bchd',
            imageurl: 'https://i.imgur.com/fcmBat6.png',
            title: 'BCHD',
            specs: '15 | 195 | 53',
            description: 'An alternative full node bitcoin cash implementation written in Go (golang).',
        })

        this.featured.push({
            url: 'https://github.com/Bitcoin-com/cashscript',
            imageurl: 'https://i.imgur.com/7ChHedR.jpg',
            title: 'CashScript',
            specs: '19 | 55 | 13',
            description: 'Easily write and interact with cash contracts on Bitcoin Cash.',
        })

        this.featured.push({
            url: 'https://github.com/Bitcoin-com/badger',
            imageurl: 'https://i.imgur.com/Io5SpcY.png',
            title: 'Badger',
            specs: '12 | 42 | 37',
            description: 'Your gateway to the world of Bitcoin Cash (BCH) apps.',
        })

        this.featured.push({
            url: 'https://github.com/simpleledger/SLPDB',
            imageurl: 'https://i.imgur.com/g2WM5TR.jpg',
            title: 'SLPDB',
            specs: '3 | 18 | 16',
            description: 'SLP Token Graph Indexer',
        })

        this.featured.push({
            url: 'https://gitlab.com/GeneralProtocols/electrum-cash',
            imageurl: 'https://i.imgur.com/VnLZKbH.png',
            title: 'electrum-cash',
            specs: '0 | 0 | 0',
            description: 'Electrum-cash is a lightweight JavaScript library that lets you connect with one or more Electrum servers.',
        })
    },
}
</script>

<style scoped>
.product-description {
    font-size: 0.9em;
    line-height: 1.5em;
    height: 3em;
    overflow: hidden;
    text-overflow: inherit;
    white-space: normal;
}
</style>
