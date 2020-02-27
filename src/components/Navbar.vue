<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <a href="/" class="brand-link">
            <img
                src="@/assets/img/icon.png"
                alt="DevOps Icon"
                class="brand-image img-rounded elevation-3"
                style="opacity: .8"
            >
            <span class="brand-text font-weight-light">DevOps.cash</span>
        </a>

        <div class="sidebar">
            <div class="user-panel mt-3 pb-3 mb-3 d-flex" v-if="account">
                <div class="avatar" v-if="account.emoji">
                    {{account.emoji}}
                </div>
                <div class="avatar" v-if="account.blockie">
                    <img :src="account.blockie" class="img-circle" elevation-3 />
                </div>
                <div>
                    <a href="javascript://" class="d-block nickname">{{account.nickname}}</a>
                    <a href="javascript://" class="d-block signout" @click="signOut"><small>[ Sign Out ]</small></a>
                </div>
            </div>
            <div class="user-panel mt-3 pb-3 mb-3 d-flex" v-else>
                <div class="image">
                    <img src="@/assets/img/cyber-hacker-icon.jpg" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                    <a href="javascript://" class="d-block" @click="signIn">Incognito <small>[ Sign in ]</small></a>
                    <a href="javascript://" class="d-block" @click="donate"><small class="donate">[ donate $0.01 to causes ]</small></a>
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
                                <router-link to="/notebook" class="nav-link">
                                    <i class="fas fa-pencil-alt nav-icon"></i>
                                    <p>Notebook</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/file-mgr" class="nav-link">
                                    <i class="fas fa-folder-open nav-icon"></i>
                                    <p>File Manager</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <a href="javascript://" class="nav-link">
                                    <p>open my desktop...</p>
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
                            <i class="nav-icon fas fa-table"></i>
                            <p>
                                Workspaces
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <router-link to="/code-editor" class="nav-link">
                                    <i class="fas fa-keyboard nav-icon"></i>
                                    <p>Code Editor</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/graphics-studio" class="nav-link">
                                    <i class="fas fa-magic nav-icon"></i>
                                    <p>Graphics Studio</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/lab" class="nav-link">
                                    <i class="fas fa-flask nav-icon"></i>
                                    <p>Lab Experiments</p>
                                </router-link>
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
                        <router-link to="/news" class="nav-link">
                            <i class="nav-icon fas fa-newspaper"></i>
                            <p>
                                Headline News
                                <span class="badge badge-info right">{{newHeadlines}}</span>
                            </p>
                        </router-link>
                    </li>

                    <!-- Source Feeds -->
                    <li class="nav-item">
                        <router-link to="/discussions" class="nav-link">
                            <i class="nav-icon fas fa-comments"></i>
                            <p>
                                Discussions
                                <span class="badge badge-info right">{{newDiscussions}}</span>
                            </p>
                        </router-link>
                    </li>

                    <!-- Event Calendar -->
                    <li class="nav-item">
                        <router-link to="/events" class="nav-link">
                            <i class="nav-icon fas fa-calendar-alt"></i>
                            <p>
                                Event Calendar
                                <span class="badge badge-info right">{{numEvents}}</span>
                            </p>
                        </router-link>
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
                                <router-link to="/markets" class="nav-link">
                                    <i class="fas fa-chart-bar nav-icon"></i>
                                    <p>Markets</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/blockchain" class="nav-link">
                                    <i class="fas fa-link nav-icon"></i>
                                    <p>Blockchain</p>
                                </router-link>
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
                        <router-link to="/buidling" class="nav-link">
                            <i class="nav-icon fas fa-tools"></i>
                            <p>
                                BUIDLing 101
                            </p>
                        </router-link>
                    </li>

                    <!-- Tutorials -->
                    <li class="nav-item">
                        <router-link to="/tutorials" class="nav-link">
                            <i class="nav-icon fas fa-book-open"></i>
                            <p>
                                Guides &amp; Tutorials
                            </p>
                        </router-link>
                    </li>

                    <!-- FAQ -->
                    <li class="nav-item">
                        <router-link to="/faq" class="nav-link">
                            <i class="nav-icon fas fa-info-circle"></i>
                            <p>
                                FAQ
                            </p>
                        </router-link>
                    </li>

                    <!-- Documenation -->
                    <li class="nav-item">
                        <a href="https://docs.devops.cash" target="_blank" class="nav-link">
                            <i class="nav-icon fas fa-book"></i>
                            <p>
                                Documenation
                            </p>
                        </a>
                    </li>

                    <!-- Contact Us -->
                    <li class="nav-item has-treeview">
                        <a href="javascript://" class="nav-link">
                            <i class="nav-icon fas fa-headset"></i>
                            <p>
                                Contact Us
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <router-link to="/slack" class="nav-link">
                                    <i class="fab fa-slack nav-icon"></i>
                                    <p>Slack</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/babel" class="nav-link">
                                    <i class="fas fa-comment-dots nav-icon"></i>
                                    <p>Babel</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/tickets" class="nav-link">
                                    <i class="fas fa-envelope-square nav-icon"></i>
                                    <p>Open a Ticket</p>
                                </router-link>
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
/* Initialize vuex. */
import { mapActions, mapState } from 'vuex'

/* Import libraries. */
import makeBlockie from 'ethereum-blockies-base64'
import moment from 'moment'
import superagent from 'superagent'

/* Import modules. */
import createSession from '@/libs/createSession'
import sendDonation from '@/libs/sendDonation'

export default {
    data: () => {
        return {
            bitbox: null,
            version: '20.2.12',
        }
    },
    computed: {
        ...mapState({
            /* Profile */
            session: state => state.profile.session,
            sessionId: state => state.profile.sessionId,
            cashAccounts: state => state.profile.cashAccounts,

            /* System */
            apiUrl: state => state.system.apiUrl,
        }),

        currentYear: function () {
            return moment().format('YYYY')
        },

        /**
         * Selects a PRIMARY account for use during the session.
         */
        account: function () {
            /* Initialize account. */
            let account = null

            if (this.cashAccounts && this.cashAccounts.length > 0) {
                /* Set emoji. */
                const emoji = this.cashAccounts[0].accountEmoji

                /* Set nickname. */
                const nickname = `${this.cashAccounts[0].nameText}#${this.cashAccounts[0].accountNumber}`

                /* Set account. */
                account = {
                    emoji,
                    nickname,
                }
            }

            /* Validate session. */
            if (account === null && this.session) {
                /* Set address. */
                const address = this.session.validation.address

                /* Generate blockie. */
                const blockie = makeBlockie(address)

                /* Set nickname. */
                const nickname = `${address.slice(12, 20)} ... ${address.slice(-8)}`

                /* Set account. */
                account = {
                    blockie,
                    nickname,
                }
            }

            /* Return account details. */
            return account
        },

        newHeadlines() {
            return 1
        },

        newDiscussions() {
            return ''
        },

        numEvents() {
            return 1
        },
    },
    methods: {
        ...mapActions('profile', [
            'deleteSession',
            'initSession',
            'updateCashAccounts',
        ]),

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
         * Donate to Charity
         */
        donate() {
            /* Send donation. */
            sendDonation()
        },

        /**
         * Sign In
         */
        async signIn() {
            /* Create a new session. */
            const result = await createSession()
                .catch(err => {
                    if (err === 'DENIED') {
                        alert('whachudoin bro? gotta approve dat')
                    } else {
                        console.error('CREATE SESSION ERROR:', err)
                    }
                })
            console.log('CREATE SESSION RESULT', result)

            /* Validate result. */
            if (result && result.authHash) {
                /* Set authorizaton hash. */
                const authHash = result.authHash
                console.log('AUTH HASH', authHash)

                superagent
                    .post(this.apiUrl + '/sessions')
                    .send({ authHash })
                    .set('accept', 'json')
                    .end((err, res) => {
                        if (err) {
                            return console.error('API ERROR:', err)
                        }

                        // console.log('SESSION RESULT', res)

                        /* Set session. */
                        const session = res.body

                        /* Validate session. */
                        if (session) {
                            /* Update store. */
                            this.initSession(session)
                            console.log('SESSION', session)
                        }

                        /* Validate cash accounts. */
                        if (session && session.cashAccounts) {
                            /* Set cash accounts. */
                            this.updateCashAccounts(session.cashAccounts)
                        }
                    })

            } else {
                alert('Something went wrong.')
            }
        },

        /**
         * Sign Out
         */
        signOut() {
            /* Delete session. */
            this.deleteSession()
        },

    },
    created: function () {
        /* Initialize BITBOX. */
        this.initBitbox()

        console.log('SESSION ID', this.sessionId)
        console.log('CASH ACCOUNTS', this.cashAccounts)
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

.avatar {
    font-size: 1.8em;
    margin-left: 10px;
}
.nickname {
    font-size: 1.15em;
    margin-top: 5px;
    margin-left: 10px;
}
.signout {
    margin-left: 10px;
}
.donate {
    color: rgba(255, 180, 180, 0.8);
}
</style>
