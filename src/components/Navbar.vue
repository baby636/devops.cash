<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <a href="/" class="brand-link">
            <img
                src="@/assets/img/icon.png"
                alt="DevOps Icon"
                class="brand-image img-circle elevation-3"
                style="opacity: .8"
            >
            <span class="brand-text font-weight-light">DevOps.cash</span>
        </a>

        <div class="sidebar">
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img src="@/assets/img/cyber-hacker-icon.jpg" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                    <a href="javascript://" class="d-block" @click="signin">Incognito <small>[Sign in]</small></a>
                </div>
            </div>

            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                    <!-- Dashboard -->
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" exact>
                            <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>
                                Dashboard
                            </p>
                        </router-link>
                    </li>

                    <!-- My Desktop -->
                    <li class="nav-item has-treeview">
                        <a href="javascript://" class="nav-link">
                            <i class="nav-icon fas fa-desktop"></i>
                            <p>
                                My Desktop
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="javascript://" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Notifications</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript://" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Messages</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript://" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Mentions</p>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-header">PRO BUIDLERS</li>

                    <!-- Projects -->
                    <li class="nav-item">
                        <router-link to="/projects" class="nav-link">
                            <i class="nav-icon fas fa-th"></i>
                            <p>
                                Projects
                                <span class="right badge badge-danger">New</span>
                            </p>
                        </router-link>
                    </li>

                    <!-- Workspaces -->
                    <li class="nav-item has-treeview">
                        <a href="javascript://" class="nav-link">
                            <i class="nav-icon fas fa-copy"></i>
                            <p>
                                Workspaces
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="javascript://" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Code Editor</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript://" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Graphics Studio</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript://" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Sandbox</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript://" class="nav-link">
                                    <p>more workspaces...</p>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-header">COMMUNITY CENTER</li>

                    <!-- Latest News -->
                    <li class="nav-item">
                        <a href="javascript://" class="nav-link">
                            <i class="nav-icon fas fa-file"></i>
                            <p>
                                Latest News
                                <span class="badge badge-info right">1</span>
                            </p>
                        </a>
                    </li>

                    <!-- Source Feeds -->
                    <li class="nav-item">
                        <a href="javascript://" class="nav-link">
                            <i class="nav-icon fas fa-file"></i>
                            <p>
                                Discussions
                                <span class="badge badge-info right">1</span>
                            </p>
                        </a>
                    </li>

                    <!-- Event Calendar -->
                    <li class="nav-item">
                        <a href="javascript://" class="nav-link">
                            <i class="nav-icon fas fa-calendar-alt"></i>
                            <p>
                                Event Calendar
                                <span class="badge badge-info right">2</span>
                            </p>
                        </a>
                    </li>

                    <!-- Charts & Data -->
                    <li class="nav-item has-treeview">
                        <a href="javascript://" class="nav-link">
                            <i class="nav-icon fas fa-chart-pie"></i>
                            <p>
                                Charts & Data
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="javascript://" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Markets</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript://" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Blockchain</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript://" class="nav-link">
                                    <p>more charts & data...</p>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-header">SUPPORT CENTER</li>

                    <!-- Getting Started -->
                    <li class="nav-item">
                        <a href="javascript://" class="nav-link">
                            <i class="nav-icon fas fa-file"></i>
                            <p>
                                BUIDLing 101
                            </p>
                        </a>
                    </li>

                    <!-- Tutorials -->
                    <li class="nav-item">
                        <a href="javascript://" class="nav-link">
                            <i class="nav-icon fas fa-file"></i>
                            <p>
                                Guides &amp; Tutorials
                            </p>
                        </a>
                    </li>

                    <!-- FAQ -->
                    <li class="nav-item">
                        <a href="javascript://" class="nav-link">
                            <i class="nav-icon fas fa-file"></i>
                            <p>
                                FAQ
                            </p>
                        </a>
                    </li>

                    <!-- Documenation -->
                    <li class="nav-item">
                        <a href="javascript://" class="nav-link">
                            <i class="nav-icon fas fa-book"></i>
                            <p>
                                Documenation
                            </p>
                        </a>
                    </li>

                    <!-- Contact Us -->
                    <li class="nav-item has-treeview">
                        <a href="javascript://" class="nav-link">
                            <i class="nav-icon fas fa-info-circle"></i>
                            <p>
                                Contact Us
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="javascript://" class="nav-link">
                                    <i class="fab fa-slack nav-icon"></i>
                                    <p>Slack</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript://" class="nav-link">
                                    <i class="fas fa-comment-dots nav-icon"></i>
                                    <p>Matrix</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript://" class="nav-link">
                                    <i class="fas fa-envelope-square nav-icon"></i>
                                    <p>Open a Ticket</p>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-header">STAFF LINKS</li>

                    <!-- StackExchange -->
                    <li class="nav-item">
                        <a href="https://area51.stackexchange.com/proposals/123786/bitcoin-cash" target="_blank" class="nav-link">
                            <i class="nav-icon fab fa-stack-overflow text-warning"></i>
                            <p>BCH.StackExchange</p>
                            <i class="nav-icon fas fa-external-link-alt"></i>
                        </a>
                    </li>

                    <!-- Reddit -->
                    <li class="nav-item">
                        <a href="https://www.reddit.com/r/DevOpsCash/" target="_blank" class="nav-link">
                            <i class="nav-icon fab fa-reddit text-danger"></i>
                            <p>r/DevOpsCash</p>
                            <i class="nav-icon fas fa-external-link-alt"></i>
                        </a>
                    </li>

                    <!-- GitHub -->
                    <li class="nav-item">
                        <a href="https://github.com/modenero/devops.cash" target="_blank" class="nav-link">
                            <i class="nav-icon fab fa-github text-primary"></i>
                            <p>Fork us on GitHub</p>
                            <i class="nav-icon fas fa-external-link-alt"></i>
                        </a>
                    </li>

                    <!-- Build Info -->
                    <li class="nav-header">
                        <div class="build-info">DevOps.cash v{{version}}</div>
                        <div class="build-info">&copy; {{currentYear}} <a href="https://modenero.com" target="_blank"><strong>Modenero</strong></a>. All rights reserved.</div>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script>
/* Import libraries. */
import CashID from 'cashid'
import moment from 'moment'

export default {
    data: () => {
        return {
            bitbox: null,
            version: '20.2.12',
        }
    },
    computed: {
        currentYear: function () {
            return moment().format('YYYY')
        },
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
         * Send Transaction
         */
        sendTx() {
            console.log('SEND TX')

            if (typeof window.web4bch !== 'undefined') {
                /* Initialize Web4BCH. */
                const web4bch = new window.Web4Bch(window.web4bch.currentProvider)
                console.log('web4bch', web4bch)

                console.log('DEFAULT ACCOUNT', web4bch.bch.defaultAccount)

                /* Validate account. */
                if (web4bch.bch && web4bch.bch.defaultAccount === undefined) {
                    alert('please unlock your badgerwallet');
                }

                /* Set transaction parameters. */
                const txParams = {
                    to: 'bitcoincash:qqqkp6fxptkkllvfxpc9n60en5c6ft24vc40uuxv2c',
                    from: web4bch.bch.defaultAccount,
                    value: 1000
                }

                /* Initialize transaction function. */
                const txFunc = (err, res) => {
                    if (err) {
                        console.error('ERROR: sendTransaction', err)

                        console.log('ERROR MSG', err.message)

                        /* Validate user approval. */
                        if (err && err.message) {
                            if (err.message.indexOf('User denied transaction signature') !== -1) {
                                // FIXME: Add a modal message here.
                                alert('User rejected the signature transaction.')
                            }
                        }

                        return
                    }

                    console.log('TRANSACTION RESULT', res)
                }

                /* Send transaction. */
                web4bch.bch.sendTransaction(txParams, txFunc)
             } else {
                 window.open('https://badgerwallet.cash')
             }

        },

        /**
         * Sign In
         */
        signin() {
            console.log('SIGN IN')

            if (typeof window.web4bch !== 'undefined') {
                /* Initialize Web4BCH. */
                const web4bch = new window.Web4Bch(window.web4bch.currentProvider)
                console.log('web4bch', web4bch)

                console.log('DEFAULT ACCOUNT', web4bch.bch.defaultAccount)

                /* Validate account. */
                if (web4bch.bch && web4bch.bch.defaultAccount === undefined) {
                    alert('please unlock your badgerwallet');
                }

                /* Initialize CashId. */
                // const cashid = new CashID()
                const cashid = new CashID('api.devops.cash', '/v1/cashid')

                /* Set action. */
                const action = 'Sign in'

                /* Set timestamp. */
                // NOTE: This is NOT currently used for any purpose during
                //       user authentication.
                const data = moment().format('LLLL (x)')

                /* Set metadata. */
                // NOTE: This is NOT currently used for any purpose during
                //       user authentication.
                const metadata = {
                    optional: {
                        identity: ['name', 'nickname'],
                        contact: ['email']
                    }
                }

                /* Set URI. */
                const cashIDRequest = cashid.createRequest(action, data, metadata)
                console.log('CASHID REQUEST', cashIDRequest)

                /* Set CashID buffer. */
                const cidBuf = Buffer.from(cashIDRequest)
                console.log('CASHID REQUEST BUFFER', cidBuf)

                /* Set CashID (authorization) hash. */
                const authHash = this.bitbox.Crypto.sha256(cidBuf).toString('hex')
                console.log('CASHID AUTH HASH', authHash)

                /* Initialize signature function. */
                const sigFunc = (err, res) => {
                    if (err) return console.error('SIGFUNC ERROR:', err)

                    console.log('SIGFUNC RESPONSE', res, authHash)
                }

                web4bch.bch.sign(
                    web4bch.bch.defaultAccount,
                    cashIDRequest,
                    sigFunc
                )
             } else {
                 window.open('https://badgerwallet.cash')
             }

        },
    },
    created: function () {
        /* Initialize BITBOX. */
        this.initBitbox()
    },
}
</script>

<style scoped>
div .build-info,
div .build-info a {
    font-size: 12px;
    color: rgba(220, 220, 220, 0.5);
}

.nav-icon.fa-external-link-alt {
    font-size: 0.70rem !important;
    color: rgba(255, 255, 255, 1.0);

    margin-left: 3px;
}
</style>
