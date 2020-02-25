<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Development Goals View</h5>

                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse">
                            <i class="fas fa-minus"></i>
                        </button>

                        <div class="btn-group">
                            <button type="button" class="btn btn-tool dropdown-toggle" data-toggle="dropdown">
                                <i class="fas fa-wrench"></i>
                            </button>

                            <div class="dropdown-menu dropdown-menu-right" role="menu">
                                <a href="javascript://" class="dropdown-item">Action</a>
                                <a href="javascript://" class="dropdown-item">Another action</a>
                                <a href="javascript://" class="dropdown-item">Something else here</a>
                                <a class="dropdown-divider"></a>
                                <a href="javascript://" class="dropdown-item">Separated link</a>
                            </div>
                        </div>

                        <button type="button" class="btn btn-tool" data-card-widget="remove">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>

                <div class="card-body">
                    <div class="row">
                        <div class="col-md-8">
                            <p class="text-center">
                                <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
                            </p>

                            <div class="chart">
                                <!-- Sales Chart Canvas -->
                                <!-- <canvas id="myChart" width="400" height="400"></canvas> -->
                                <canvas id="salesChart" height="180" style="height: 180px;"></canvas>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <p class="text-center">
                                <strong>Goal Completion</strong>
                            </p>

                            <div
                                v-for="(goal, index) of goals"
                                v-bind:key="goal.title"
                                class="progress-group"
                            >
                                {{goal.title}}

                                <span class="float-right">
                                    <b>{{goal.completed}}</b>/{{goal.target}}
                                </span>

                                <div class="progress progress-sm">
                                    <div
                                        class="progress-bar"
                                        :class="goal.bg"
                                        :style="{ width: completionPct(index) }"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-footer">
                    <div class="row">
                        <div class="col-sm-3 col-6">
                            <div class="description-block border-right">
                                <span class="description-percentage text-success"><i class="fas fa-caret-up"></i> 17%</span>
                                <h5 class="description-header">$35,210.43</h5>
                                <span class="description-text">TOTAL REVENUE</span>
                            </div>
                        </div>

                        <div class="col-sm-3 col-6">
                            <div class="description-block border-right">
                                <span class="description-percentage text-warning"><i class="fas fa-caret-left"></i> 0%</span>
                                <h5 class="description-header">$10,390.90</h5>
                                <span class="description-text">TOTAL COST</span>
                            </div>
                        </div>

                        <div class="col-sm-3 col-6">
                            <div class="description-block border-right">
                                <span class="description-percentage text-success"><i class="fas fa-caret-up"></i> 20%</span>
                                <h5 class="description-header">$24,813.53</h5>
                                <span class="description-text">TOTAL PROFIT</span>
                            </div>
                        </div>

                        <div class="col-sm-3 col-6">
                            <div class="description-block">
                                <span class="description-percentage text-danger"><i class="fas fa-caret-down"></i> 18%</span>
                                <h5 class="description-header">1200</h5>
                                <span class="description-text">GOAL COMPLETIONS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* Import modules. */
import numeral from 'numeral'

export default {
    data: () => {
        return {
            goals: []
        }
    },
    computed: {
        completionPct() {
            // NOTE: We use this "method" to allow for the parameter.
            // https://stackoverflow.com/a/40539522
            return _goalId => {
                /* Validate goals. */
                if (!this.goals) {
                    return ''
                }

                /* Calculate completion pct. */
                const pct = this.goals[_goalId].completed / this.goals[_goalId].target
                // console.log('COMPLETION PCT', pct)

                /* Set formatted. */
                const formatted = numeral(pct).format('0.0%')
                // console.log('COMPLETION FORMATTED', formatted)

                /* Return style. */
                return formatted
            }
        }
    },
    methods: {
        loadSampleChart() {
            var ctx = document.getElementById('myChart').getContext('2d');
            new window.Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        },

        loadSalesChart() {
            /* Set JQuery. */
            // const $ = window.$

            /* Set Chart. */
            const Chart = window.Chart

            // Get context with jQuery - using jQuery's .get() method.
            // var salesChartCanvas = $('#salesChart').get(0).getContext('2d')
            var salesChartCanvas = document.getElementById('salesChart').getContext('2d');

            var salesChartData = {
              labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label               : 'Digital Goods',
                  backgroundColor     : 'rgba(60,141,188,0.9)',
                  borderColor         : 'rgba(60,141,188,0.8)',
                  pointRadius          : false,
                  pointColor          : '#3b8bba',
                  pointStrokeColor    : 'rgba(60,141,188,1)',
                  pointHighlightFill  : '#fff',
                  pointHighlightStroke: 'rgba(60,141,188,1)',
                  data                : [28, 48, 40, 19, 86, 27, 90]
                },
                {
                  label               : 'Electronics',
                  backgroundColor     : 'rgba(210, 214, 222, 1)',
                  borderColor         : 'rgba(210, 214, 222, 1)',
                  pointRadius         : false,
                  pointColor          : 'rgba(210, 214, 222, 1)',
                  pointStrokeColor    : '#c1c7d1',
                  pointHighlightFill  : '#fff',
                  pointHighlightStroke: 'rgba(220,220,220,1)',
                  data                : [65, 59, 80, 81, 56, 55, 40]
                },
              ]
            }

            var salesChartOptions = {
              maintainAspectRatio : false,
              responsive : true,
              legend: {
                display: false
              },
              scales: {
                xAxes: [{
                  gridLines : {
                    display : false,
                  }
                }],
                yAxes: [{
                  gridLines : {
                    display : false,
                  }
                }]
              }
            }

            // This will get the first returned node in the jQuery collection.
            new Chart(salesChartCanvas, {
                type: 'line',
                data: salesChartData,
                options: salesChartOptions
              }
            )

        }

    },
    created: function () {
        /* Add goal. */
        this.goals.push({
            title: 'Bull Run to $1k by Dec 2020',
            completed: 391,
            target: 1000,
            bg: 'bg-primary',
        })

        /* Add goal. */
        this.goals.push({
            title: 'Development Roadmap',
            completed: 7,
            target: 19,
            bg: 'bg-primary',
        })

        /* Add goal. */
        this.goals.push({
            title: 'BCH.StackExchange Commitments',
            completed: 31,
            target: 100,
            bg: 'bg-warning',
        })

        /* Add goal. */
        this.goals.push({
            title: 'SHA256 Total Hash Rate %',
            completed: 4,
            target: 80,
            bg: 'bg-danger',
        })

    },
    mounted: function () {
        // this.loadSampleChart()
        this.loadSalesChart()
    },
}
</script>

<style scoped>
/*  */
</style>
