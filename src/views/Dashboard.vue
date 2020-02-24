<template>
    <main>
        <Header pageId="dashboard" />

        <section class="content">
            <div class="container-fluid">
                <!-- Highlights: Information boxes of most importance -->
                <Highlights />

                <!-- Trends: What's "hot" in the community -->
                <Trends />

                <!-- Goals: Community targets and milestones -->
                <Goals />

                <div class="row">
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-6">
                                <!-- Feeds: A live view of chats and messaging platforms -->
                                <Feeds />
                            </div>

                            <div class="col-md-6">
                                <!-- Newcomers: Newest "verified" users -->
                                <Newcomers />
                            </div>

                        </div>

                        <!-- Updates: Most recent "notable" project updates -->
                        <Updates />

                    </div>

                    <div class="col-md-4">
                        <!-- Featured: Projects that have high traction -->
                        <Featured />

                        <!-- Calendar: Upcoming events and important dates -->
                        <Calendar />

                        <!-- Todo: Top items to be completed -->
                        <!-- <Todo /> -->

                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
/* Import components. */
import Header from '@/components/Header.vue'

/* Import (local) components. */
import { Calendar } from '@/components/Dashboard'
import { Featured } from '@/components/Dashboard'
import { Feeds } from '@/components/Dashboard'
import { Goals } from '@/components/Dashboard'
import { Highlights } from '@/components/Dashboard'
import { Newcomers } from '@/components/Dashboard'
// import { Todo } from '@/components/Dashboard'
import { Trends } from '@/components/Dashboard'
import { Updates } from '@/components/Dashboard'

export default {
    components: {
        Header,

        Calendar,
        Featured,
        Feeds,
        Goals,
        Highlights,
        Newcomers,
        // Todo,
        Trends,
        Updates,
    },
    mounted: function () {
        //
    }
}
</script>

<style scoped>
/*  */
</style>
