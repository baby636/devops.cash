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
        /* Set JQuery. */
        // const $ = window.$

        /* Set Chart. */
        // const Chart = window.Chart

        /* ChartJS
         * -------
         * Here we will create a few charts using ChartJS
         */

        //-----------------------
        //- MONTHLY SALES CHART -
        //-----------------------

        // Get context with jQuery - using jQuery's .get() method.
        // var salesChartCanvas = $('#salesChart').get(0).getContext('2d')

        // var salesChartData = {
        //   labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        //   datasets: [
        //     {
        //       label               : 'Digital Goods',
        //       backgroundColor     : 'rgba(60,141,188,0.9)',
        //       borderColor         : 'rgba(60,141,188,0.8)',
        //       pointRadius          : false,
        //       pointColor          : '#3b8bba',
        //       pointStrokeColor    : 'rgba(60,141,188,1)',
        //       pointHighlightFill  : '#fff',
        //       pointHighlightStroke: 'rgba(60,141,188,1)',
        //       data                : [28, 48, 40, 19, 86, 27, 90]
        //     },
        //     {
        //       label               : 'Electronics',
        //       backgroundColor     : 'rgba(210, 214, 222, 1)',
        //       borderColor         : 'rgba(210, 214, 222, 1)',
        //       pointRadius         : false,
        //       pointColor          : 'rgba(210, 214, 222, 1)',
        //       pointStrokeColor    : '#c1c7d1',
        //       pointHighlightFill  : '#fff',
        //       pointHighlightStroke: 'rgba(220,220,220,1)',
        //       data                : [65, 59, 80, 81, 56, 55, 40]
        //     },
        //   ]
        // }

        // var salesChartOptions = {
        //   maintainAspectRatio : false,
        //   responsive : true,
        //   legend: {
        //     display: false
        //   },
        //   scales: {
        //     xAxes: [{
        //       gridLines : {
        //         display : false,
        //       }
        //     }],
        //     yAxes: [{
        //       gridLines : {
        //         display : false,
        //       }
        //     }]
        //   }
        // }

        // This will get the first returned node in the jQuery collection.
        // new Chart(salesChartCanvas, {
        //     type: 'line',
        //     data: salesChartData,
        //     options: salesChartOptions
        //   }
        // )

        //---------------------------
        //- END MONTHLY SALES CHART -
        //---------------------------

        //-------------
        //- PIE CHART -
        //-------------
        // Get context with jQuery - using jQuery's .get() method.
          // var pieChartCanvas = $('#pieChart').get(0).getContext('2d')
          // var pieData        = {
          //   labels: [
          //       'Chrome',
          //       'IE',
          //       'FireFox',
          //       'Safari',
          //       'Opera',
          //       'Navigator',
          //   ],
          //   datasets: [
          //     {
          //       data: [700,500,400,600,300,100],
          //       backgroundColor : ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
          //     }
          //   ]
          // }
          // var pieOptions     = {
          //   legend: {
          //     display: false
          //   }
          // }
          //Create pie or douhnut chart
          // You can switch between pie and douhnut using the method below.
          // new Chart(pieChartCanvas, {
          //   type: 'doughnut',
          //   data: pieData,
          //   options: pieOptions
          // })

        //-----------------
        //- END PIE CHART -
        //-----------------

        /* jVector Maps
         * ------------
         * Create a world map with markers
         */
        // $('#world-map-markers').mapael({
        //     map: {
        //       name : "usa_states",
        //       zoom: {
        //         enabled: true,
        //         maxLevel: 10
        //       },
        //     },
        //   }
        // );
    }
}
</script>

<style scoped>
/*  */
</style>
