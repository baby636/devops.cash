<template>
    <footer class="main-footer">
        &copy; {{currentYear}} <a href="https://modenero.com" target="_blank">Modenero</a>. All rights reserved.
    </footer>
</template>

<script>
/* Import libraries. */
import moment from 'moment'

export default {
    computed: {
        currentYear: function () {
            return moment().format('YYYY')
        },
    },
}
</script>

<style scoped>
/*  */
</style>
