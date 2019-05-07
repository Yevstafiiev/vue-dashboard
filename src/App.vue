<template>
    <el-container id="app">
        <el-header>
            <h1><router-link class='headertext' to="/dashboard">Dashboard</router-link></h1>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
    import dashboard from './components/Dashboard.vue';
    import Vue from 'vue'


    Vue.component('dashboard',dashboard);
    export default {
        name: 'app',
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        background: #DCDFE6;
        margin: 0;
    }
    body {
        margin: 0;
    }
    .el-header {
        border-bottom: 1px solid grey;
    }
    .headertext {
        color: #000000;
        text-decoration: none;
    }
</style>
