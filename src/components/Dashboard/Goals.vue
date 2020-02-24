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
}
</script>

<style scoped>
/*  */
</style>
