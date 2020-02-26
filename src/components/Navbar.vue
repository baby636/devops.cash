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
                    <a href="javascript://" class="d-block" @click="register"><small>[Register]</small></a>
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
import moment from 'moment'

/* Import modules. */
import sendDonation from '@/libs/sendDonation'
import signIn from '@/libs/signIn'

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
         * Register
         */
        register() {
            /* Send donation. */
            sendDonation()
        },

        /**
         * Sign In
         */
        signin() {
            /* Sign In. */
            signIn()
        }

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
