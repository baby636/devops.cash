<template>
    <div class="wrapper">
        <Topbar />
        <Navbar />

        <div class="content-wrapper">
            <router-view />
        </div>

        <Sidebar />
        <Footer />
    </div>
</template>

<script>
/* Import components. */
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Topbar from '@/components/Topbar.vue'

export default {
    components: {
        Footer,
        Navbar,
        Sidebar,
        Topbar,
    },
}
</script>

<style>
/*  */
</style>
