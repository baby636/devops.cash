<template>
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Newcomers</h3>

            <div class="card-tools">
                <span class="badge badge-danger">8 NEW <small>in last 30 days</small></span>

                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                </button>

                <button type="button" class="btn btn-tool" data-card-widget="remove">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>

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
        </div>

        <div class="card-footer text-center">
            <a href="javascript://">View All Members</a>
        </div>
    </div>
</template>

<script>
export default {
    //
}
</script>

<style scoped>
/*  */
</style>
