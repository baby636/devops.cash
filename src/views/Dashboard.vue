<template>
    <main>
        <!-- Header -->
        <Header pageId="dashboard" />

        <!-- Page Section -->
        <section class="content">
            <div class="container-fluid">

                <InfoBoxes />
                <TrendView />
                <GoalSummary />

                <div class="row">
                    <!-- Left col -->
                    <div class="col-md-8">

                        <div class="row">
                            <div class="col-md-6">
                                <!-- DIRECT CHAT -->
                                <div class="card direct-chat direct-chat-warning">
                                    <div class="card-header">
                                        <h3 class="card-title">Direct Chat</h3>

                                        <div class="card-tools">
                                            <span data-toggle="tooltip" title="3 New Messages" class="badge badge-warning">3</span>
                                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                                            </button>
                                            <button type="button" class="btn btn-tool" data-toggle="tooltip" title="Contacts"
                                            data-widget="chat-pane-toggle">
                                            <i class="fas fa-comments"></i></button>
                                            <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <!-- /.card-header -->

                                    <div class="card-body">
                                        <!-- Conversations are loaded here -->
                                        <div class="direct-chat-messages">
                                            <!-- Message. Default to the left -->
                                            <div class="direct-chat-msg">
                                                <div class="direct-chat-infos clearfix">
                                                    <span class="direct-chat-name float-left">Alexander Pierce</span>
                                                    <span class="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                                                </div>
                                                <!-- /.direct-chat-infos -->
                                                <img class="direct-chat-img" src="@/assets/img/user1-128x128.jpg" alt="message user image">
                                                <!-- /.direct-chat-img -->
                                                <div class="direct-chat-text">
                                                    Is this template really for free? That's unbelievable!
                                                </div>
                                                <!-- /.direct-chat-text -->
                                            </div>
                                            <!-- /.direct-chat-msg -->

                                            <!-- Message to the right -->
                                            <div class="direct-chat-msg right">
                                                <div class="direct-chat-infos clearfix">
                                                    <span class="direct-chat-name float-right">Sarah Bullock</span>
                                                    <span class="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                                                </div>
                                                <!-- /.direct-chat-infos -->
                                                <img class="direct-chat-img" src="@/assets/img/user3-128x128.jpg" alt="message user image">
                                                <!-- /.direct-chat-img -->
                                                <div class="direct-chat-text">
                                                    You better believe it!
                                                </div>
                                                <!-- /.direct-chat-text -->
                                            </div>
                                            <!-- /.direct-chat-msg -->

                                            <!-- Message. Default to the left -->
                                            <div class="direct-chat-msg">
                                                <div class="direct-chat-infos clearfix">
                                                    <span class="direct-chat-name float-left">Alexander Pierce</span>
                                                    <span class="direct-chat-timestamp float-right">23 Jan 5:37 pm</span>
                                                </div>
                                                <!-- /.direct-chat-infos -->
                                                <img class="direct-chat-img" src="@/assets/img/user1-128x128.jpg" alt="message user image">
                                                <!-- /.direct-chat-img -->
                                                <div class="direct-chat-text">
                                                    Working with AdminLTE on a great new app! Wanna join?
                                                </div>
                                                <!-- /.direct-chat-text -->
                                            </div>
                                            <!-- /.direct-chat-msg -->

                                            <!-- Message to the right -->
                                            <div class="direct-chat-msg right">
                                                <div class="direct-chat-infos clearfix">
                                                    <span class="direct-chat-name float-right">Sarah Bullock</span>
                                                    <span class="direct-chat-timestamp float-left">23 Jan 6:10 pm</span>
                                                </div>
                                                <!-- /.direct-chat-infos -->
                                                <img class="direct-chat-img" src="@/assets/img/user3-128x128.jpg" alt="message user image">
                                                <!-- /.direct-chat-img -->
                                                <div class="direct-chat-text">
                                                    I would love to.
                                                </div>
                                                <!-- /.direct-chat-text -->
                                            </div>
                                            <!-- /.direct-chat-msg -->

                                        </div>
                                        <!--/.direct-chat-messages-->

                                        <!-- Contacts are loaded here -->
                                        <div class="direct-chat-contacts">
                                            <ul class="contacts-list">
                                                <li>
                                                    <a href="javascript://">
                                                        <img class="contacts-list-img" src="@/assets/img/user1-128x128.jpg">

                                                        <div class="contacts-list-info">
                                                            <span class="contacts-list-name">
                                                                Count Dracula
                                                                <small class="contacts-list-date float-right">2/28/2015</small>
                                                            </span>
                                                            <span class="contacts-list-msg">How have you been? I was...</span>
                                                        </div>
                                                        <!-- /.contacts-list-info -->
                                                    </a>
                                                </li>
                                                <!-- End Contact Item -->
                                                <li>
                                                    <a href="javascript://">
                                                        <img class="contacts-list-img" src="@/assets/img/user7-128x128.jpg">

                                                        <div class="contacts-list-info">
                                                            <span class="contacts-list-name">
                                                                Sarah Doe
                                                                <small class="contacts-list-date float-right">2/23/2015</small>
                                                            </span>
                                                            <span class="contacts-list-msg">I will be waiting for...</span>
                                                        </div>
                                                        <!-- /.contacts-list-info -->
                                                    </a>
                                                </li>
                                                <!-- End Contact Item -->
                                                <li>
                                                    <a href="javascript://">
                                                        <img class="contacts-list-img" src="@/assets/img/user3-128x128.jpg">

                                                        <div class="contacts-list-info">
                                                            <span class="contacts-list-name">
                                                                Nadia Jolie
                                                                <small class="contacts-list-date float-right">2/20/2015</small>
                                                            </span>
                                                            <span class="contacts-list-msg">I'll call you back at...</span>
                                                        </div>
                                                        <!-- /.contacts-list-info -->
                                                    </a>
                                                </li>
                                                <!-- End Contact Item -->
                                                <li>
                                                    <a href="javascript://">
                                                        <img class="contacts-list-img" src="@/assets/img/user5-128x128.jpg">

                                                        <div class="contacts-list-info">
                                                            <span class="contacts-list-name">
                                                                Nora S. Vans
                                                                <small class="contacts-list-date float-right">2/10/2015</small>
                                                            </span>
                                                            <span class="contacts-list-msg">Where is your new...</span>
                                                        </div>
                                                        <!-- /.contacts-list-info -->
                                                    </a>
                                                </li>
                                                <!-- End Contact Item -->
                                                <li>
                                                    <a href="javascript://">
                                                        <img class="contacts-list-img" src="@/assets/img/user6-128x128.jpg">

                                                        <div class="contacts-list-info">
                                                            <span class="contacts-list-name">
                                                                John K.
                                                                <small class="contacts-list-date float-right">1/27/2015</small>
                                                            </span>
                                                            <span class="contacts-list-msg">Can I take a look at...</span>
                                                        </div>
                                                        <!-- /.contacts-list-info -->
                                                    </a>
                                                </li>
                                                <!-- End Contact Item -->
                                                <li>
                                                    <a href="javascript://">
                                                        <img class="contacts-list-img" src="@/assets/img/user8-128x128.jpg">

                                                        <div class="contacts-list-info">
                                                            <span class="contacts-list-name">
                                                                Kenneth M.
                                                                <small class="contacts-list-date float-right">1/4/2015</small>
                                                            </span>
                                                            <span class="contacts-list-msg">Never mind I found...</span>
                                                        </div>
                                                        <!-- /.contacts-list-info -->
                                                    </a>
                                                </li>
                                                <!-- End Contact Item -->
                                            </ul>
                                            <!-- /.contacts-list -->
                                        </div>
                                        <!-- /.direct-chat-pane -->
                                    </div>
                                    <!-- /.card-body -->

                                    <div class="card-footer">
                                        <form action="javascript://" method="post">
                                            <div class="input-group">
                                                <input type="text" name="message" placeholder="Type Message ..." class="form-control">
                                                <span class="input-group-append">
                                                    <button type="button" class="btn btn-warning">Send</button>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                    <!-- /.card-footer-->
                                </div>
                                <!--/.direct-chat -->
                            </div>
                            <!-- /.col -->

                            <div class="col-md-6">
                                <!-- USERS LIST -->
                                <div class="card">
                                    <div class="card-header">
                                        <h3 class="card-title">Latest Members</h3>

                                        <div class="card-tools">
                                            <span class="badge badge-danger">8 New Members</span>
                                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                                            </button>
                                            <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <!-- /.card-header -->
                                    <div class="card-body p-0">
                                        <ul class="users-list clearfix">
                                            <li>
                                                <img src="@/assets/img/user1-128x128.jpg" alt="User Image">
                                                <a class="users-list-name" href="javascript://">Alexander Pierce</a>
                                                <span class="users-list-date">Today</span>
                                            </li>
                                            <li>
                                                <img src="@/assets/img/user8-128x128.jpg" alt="User Image">
                                                <a class="users-list-name" href="javascript://">Norman</a>
                                                <span class="users-list-date">Yesterday</span>
                                            </li>
                                            <li>
                                                <img src="@/assets/img/user7-128x128.jpg" alt="User Image">
                                                <a class="users-list-name" href="javascript://">Jane</a>
                                                <span class="users-list-date">12 Jan</span>
                                            </li>
                                            <li>
                                                <img src="@/assets/img/user6-128x128.jpg" alt="User Image">
                                                <a class="users-list-name" href="javascript://">John</a>
                                                <span class="users-list-date">12 Jan</span>
                                            </li>
                                            <li>
                                                <img src="@/assets/img/user2-160x160.jpg" alt="User Image">
                                                <a class="users-list-name" href="javascript://">Alexander</a>
                                                <span class="users-list-date">13 Jan</span>
                                            </li>
                                            <li>
                                                <img src="@/assets/img/user5-128x128.jpg" alt="User Image">
                                                <a class="users-list-name" href="javascript://">Sarah</a>
                                                <span class="users-list-date">14 Jan</span>
                                            </li>
                                            <li>
                                                <img src="@/assets/img/user4-128x128.jpg" alt="User Image">
                                                <a class="users-list-name" href="javascript://">Nora</a>
                                                <span class="users-list-date">15 Jan</span>
                                            </li>
                                            <li>
                                                <img src="@/assets/img/user3-128x128.jpg" alt="User Image">
                                                <a class="users-list-name" href="javascript://">Nadia</a>
                                                <span class="users-list-date">15 Jan</span>
                                            </li>
                                        </ul>
                                        <!-- /.users-list -->
                                    </div>
                                    <!-- /.card-body -->
                                    <div class="card-footer text-center">
                                        <a href="javascript::">View All Users</a>
                                    </div>
                                    <!-- /.card-footer -->
                                </div>
                                <!--/.card -->
                            </div>
                            <!-- /.col -->
                        </div>
                        <!-- /.row -->

                        <!-- TABLE: LATEST ORDERS -->
                        <div class="card">
                            <div class="card-header border-transparent">
                                <h3 class="card-title">Latest Orders</h3>

                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                    <button type="button" class="btn btn-tool" data-card-widget="remove">
                                        <i class="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body p-0">
                                <div class="table-responsive">
                                    <table class="table m-0">
                                        <thead>
                                            <tr>
                                                <th>Order ID</th>
                                                <th>Item</th>
                                                <th>Status</th>
                                                <th>Popularity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><a href="pages/examples/invoice.html">OR9842</a></td>
                                                <td>Call of Duty IV</td>
                                                <td><span class="badge badge-success">Shipped</span></td>
                                                <td>
                                                    <div class="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="pages/examples/invoice.html">OR1848</a></td>
                                                <td>Samsung Smart TV</td>
                                                <td><span class="badge badge-warning">Pending</span></td>
                                                <td>
                                                    <div class="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="pages/examples/invoice.html">OR7429</a></td>
                                                <td>iPhone 6 Plus</td>
                                                <td><span class="badge badge-danger">Delivered</span></td>
                                                <td>
                                                    <div class="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="pages/examples/invoice.html">OR7429</a></td>
                                                <td>Samsung Smart TV</td>
                                                <td><span class="badge badge-info">Processing</span></td>
                                                <td>
                                                    <div class="sparkbar" data-color="#00c0ef" data-height="20">90,80,-90,70,-61,83,63</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="pages/examples/invoice.html">OR1848</a></td>
                                                <td>Samsung Smart TV</td>
                                                <td><span class="badge badge-warning">Pending</span></td>
                                                <td>
                                                    <div class="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="pages/examples/invoice.html">OR7429</a></td>
                                                <td>iPhone 6 Plus</td>
                                                <td><span class="badge badge-danger">Delivered</span></td>
                                                <td>
                                                    <div class="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="pages/examples/invoice.html">OR9842</a></td>
                                                <td>Call of Duty IV</td>
                                                <td><span class="badge badge-success">Shipped</span></td>
                                                <td>
                                                    <div class="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- /.table-responsive -->
                            </div>
                            <!-- /.card-body -->
                            <div class="card-footer clearfix">
                                <a href="javascript:void(0)" class="btn btn-sm btn-info float-left">Place New Order</a>
                                <a href="javascript:void(0)" class="btn btn-sm btn-secondary float-right">View All Orders</a>
                            </div>
                            <!-- /.card-footer -->
                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.col -->

                    <div class="col-md-4">

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Browser Usage</h3>

                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                                    </button>
                                    <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="chart-responsive">
                                            <canvas id="pieChart" height="150"></canvas>
                                        </div>
                                        <!-- ./chart-responsive -->
                                    </div>
                                    <!-- /.col -->
                                    <div class="col-md-4">
                                        <ul class="chart-legend clearfix">
                                            <li><i class="far fa-circle text-danger"></i> Chrome</li>
                                            <li><i class="far fa-circle text-success"></i> IE</li>
                                            <li><i class="far fa-circle text-warning"></i> FireFox</li>
                                            <li><i class="far fa-circle text-info"></i> Safari</li>
                                            <li><i class="far fa-circle text-primary"></i> Opera</li>
                                            <li><i class="far fa-circle text-secondary"></i> Navigator</li>
                                        </ul>
                                    </div>
                                    <!-- /.col -->
                                </div>
                                <!-- /.row -->
                            </div>
                            <!-- /.card-body -->
                            <div class="card-footer bg-white p-0">
                                <ul class="nav nav-pills flex-column">
                                    <li class="nav-item">
                                        <a href="javascript://" class="nav-link">
                                            United States of America
                                            <span class="float-right text-danger">
                                                <i class="fas fa-arrow-down text-sm"></i>
                                                12%</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript://" class="nav-link">
                                                India
                                                <span class="float-right text-success">
                                                    <i class="fas fa-arrow-up text-sm"></i> 4%
                                                </span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript://" class="nav-link">
                                                China
                                                <span class="float-right text-warning">
                                                    <i class="fas fa-arrow-left text-sm"></i> 0%
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <!-- /.footer -->
                            </div>
                            <!-- /.card -->

                            <!-- PRODUCT LIST -->
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Recently Added Products</h3>

                                    <div class="card-tools">
                                        <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                            <i class="fas fa-minus"></i>
                                        </button>
                                        <button type="button" class="btn btn-tool" data-card-widget="remove">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <!-- /.card-header -->
                                <div class="card-body p-0">
                                    <ul class="products-list product-list-in-card pl-2 pr-2">
                                        <li class="item">
                                            <div class="product-img">
                                                <img src="@/assets/img/default-150x150.png" alt="Product Image" class="img-size-50">
                                            </div>
                                            <div class="product-info">
                                                <a href="javascript:void(0)" class="product-title">Samsung TV
                                                    <span class="badge badge-warning float-right">$1800</span></a>
                                                    <span class="product-description">
                                                        Samsung 32" 1080p 60Hz LED Smart HDTV.
                                                    </span>
                                                </div>
                                            </li>
                                            <!-- /.item -->
                                            <li class="item">
                                                <div class="product-img">
                                                    <img src="@/assets/img/default-150x150.png" alt="Product Image" class="img-size-50">
                                                </div>
                                                <div class="product-info">
                                                    <a href="javascript:void(0)" class="product-title">Bicycle
                                                        <span class="badge badge-info float-right">$700</span></a>
                                                        <span class="product-description">
                                                            26" Mongoose Dolomite Men's 7-speed, Navy Blue.
                                                        </span>
                                                    </div>
                                                </li>
                                                <!-- /.item -->
                                                <li class="item">
                                                    <div class="product-img">
                                                        <img src="@/assets/img/default-150x150.png" alt="Product Image" class="img-size-50">
                                                    </div>
                                                    <div class="product-info">
                                                        <a href="javascript:void(0)" class="product-title">
                                                            Xbox One <span class="badge badge-danger float-right">
                                                                $350
                                                            </span>
                                                        </a>
                                                        <span class="product-description">
                                                            Xbox One Console Bundle with Halo Master Chief Collection.
                                                        </span>
                                                    </div>
                                                </li>
                                                <!-- /.item -->
                                                <li class="item">
                                                    <div class="product-img">
                                                        <img src="@/assets/img/default-150x150.png" alt="Product Image" class="img-size-50">
                                                    </div>
                                                    <div class="product-info">
                                                        <a href="javascript:void(0)" class="product-title">PlayStation 4
                                                            <span class="badge badge-success float-right">$399</span></a>
                                                            <span class="product-description">
                                                                PlayStation 4 500GB Console (PS4)
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <!-- /.item -->
                                                </ul>
                                            </div>
                                            <!-- /.card-body -->
                                            <div class="card-footer text-center">
                                                <a href="javascript:void(0)" class="uppercase">View All Products</a>
                                            </div>
                                            <!-- /.card-footer -->
                                        </div>
                                        <!-- /.card -->
                                    </div>
                                    <!-- /.col -->
                                </div>
                                <!-- /.row -->
            </div><!--/. container-fluid -->
        </section>
    </main>
</template>

<script>
/* Import components. */
import Header from '@/components/Header.vue'

/* Import (local) components. */
import { GoalSummary } from '@/components/Dashboard'
import { InfoBoxes } from '@/components/Dashboard'
import { TrendView } from '@/components/Dashboard'

export default {
    components: {
        Header,

        GoalSummary,
        InfoBoxes,
        TrendView,
    },
    mounted: function () {
        /* Set JQuery. */
        const $ = window.$

        /* Set Chart. */
        const Chart = window.Chart

        /* ChartJS
         * -------
         * Here we will create a few charts using ChartJS
         */

        //-----------------------
        //- MONTHLY SALES CHART -
        //-----------------------

        // Get context with jQuery - using jQuery's .get() method.
        var salesChartCanvas = $('#salesChart').get(0).getContext('2d')

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

        //---------------------------
        //- END MONTHLY SALES CHART -
        //---------------------------

        //-------------
        //- PIE CHART -
        //-------------
        // Get context with jQuery - using jQuery's .get() method.
          var pieChartCanvas = $('#pieChart').get(0).getContext('2d')
          var pieData        = {
            labels: [
                'Chrome',
                'IE',
                'FireFox',
                'Safari',
                'Opera',
                'Navigator',
            ],
            datasets: [
              {
                data: [700,500,400,600,300,100],
                backgroundColor : ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
              }
            ]
          }
          var pieOptions     = {
            legend: {
              display: false
            }
          }
          //Create pie or douhnut chart
          // You can switch between pie and douhnut using the method below.
          new Chart(pieChartCanvas, {
            type: 'doughnut',
            data: pieData,
            options: pieOptions
          })

        //-----------------
        //- END PIE CHART -
        //-----------------

        /* jVector Maps
         * ------------
         * Create a world map with markers
         */
        $('#world-map-markers').mapael({
            map: {
              name : "usa_states",
              zoom: {
                enabled: true,
                maxLevel: 10
              },
            },
          }
        );
    }
}
</script>

<style scoped>
/*  */
</style>
