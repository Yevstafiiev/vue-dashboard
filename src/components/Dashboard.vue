<template>
  <div class="dashboard">
    <div class="dashboard-body">
        <template v-for="item in getCompaniesInfoFirst">
            <DashboardCard :item="item"></DashboardCard>
        </template>
        <template v-for="item in continueDashboard">
            <DashboardCard :item="item"></DashboardCard>
        </template>
        <el-button type="text" class="show-more" v-if="getCompaniesInfo.length" @click="downloadMore()">Show more</el-button>
    </div>
  </div>
</template>

<script>
import DashboardCard from './dashboard/dashboardCard'
import Vue from 'vue'

Vue.component('DashboardCard', DashboardCard);
    export default {
        name: 'Dashboard',
        data() {
            return {
                dashboardCards:[],
                startIndex:0,
                endIndex:6,
                continueDashboard:[],
            }
        },
        computed: {
            getCompaniesInfo() {
                return window.storeCampaings.getters.getCompaniesInfo;
            },
            getCompaniesInfoFirst() {
                return window.storeCampaings.getters.getCompaniesInfoFirst;
            }
        },
        mounted() {
            window.storeCampaings.dispatch('LOAD_COMPANIES_INFO');
        },
        methods:{
            downloadMore() {
                let new_arr=this.getCompaniesInfo.slice(this.startIndex,this.endIndex);
                new_arr.map((item)=>{
                    this.continueDashboard.push(item);
                });
                this.getCompaniesInfo.splice(this.startIndex,this.endIndex);
            }
        }
    }
</script>

<style>
    .show-more {
        font-size: 32px;
        color: #808080;
    }
</style>
