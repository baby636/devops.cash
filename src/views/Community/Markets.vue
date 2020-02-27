<template>
    <main>
        <!-- Header -->
        <Header pageId="markets" />

        <!-- Page Section -->
        <section class="content">
            <div class="container-fluid">
                <UnderConstruction />
            </div>
        </section>
    </main>
</template>

<script>
/* Import components. */
import Header from '@/components/Header.vue'
import UnderConstruction from '@/components/UnderConstruction.vue'

export default {
    components: {
        Header,
        UnderConstruction,
    },
    data: () => {
        return {
            //
        }
    },
    created: async function () {
        //
    },
    mounted: function () {
        //
    },
}
</script>

<style scoped>
/*  */
</style>
