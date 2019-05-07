<template >
    <el-col :span="8">
    <div v-if="!isHide" class="dashboard-item"  :class="[item.type === 'Challenge' ? 'challenge' : item.type === 'Giveaway' ? 'giveaway' : 'campaign']">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <p class="title" >{{item.name}}</p>
                <p>{{item.type}}</p>
            </div>
            <div class="text item cardbody">
                <el-row>
                    <el-col :span="12">
                        <span>APPROVED POSTS</span>
                        <p class="title">{{item.approved_posts}}</p>
                    </el-col>
                    <el-col :span="12">
                        <span>INFLUENCER</span>
                        <p class="title">{{item.num_of_artists}}</p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <span>LIKES</span>
                        <p class="title">{{item.approved_likes}}</p>
                    </el-col>
                    <el-col :span="12">
                        <span>COMMENTS</span>
                        <p class="title">{{item.approved_comments}}</p>
                    </el-col>
                </el-row>
                <span class="progress">{{item.progress}}% ({{item.days_passed}}/{{item.days_total}} days)</span>
            </div>
            <el-row class="actionsbtn">
                <el-col :span="12">
                    <el-button class='hidebtn' type="text" @click="hideItem">HIDE</el-button>
                </el-col>
                <el-col :span="12">
                    <el-button class='detailsbtn' type="text"><router-link class="textdecoration" :to="'/campaings/'+item.id">SHOW DETAILS</router-link></el-button>
                </el-col>
            </el-row>
        </el-card>
    </div>
    </el-col>
</template>
<script>
    export default  {
        props:['item'],
        data(){
            return {
                isHide:false,
            }
        },
        methods: {
            hideItem() {
                this.isHide=true;
            }
        },
    }
</script>
<style>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 420px;
        text-align: left;
        margin-bottom: 24px;
    }
    .challenge .el-card__header {
        border-top: 6px solid red;
    }
    .giveaway .el-card__header {
        border-top: 6px solid green;
    }
    .campaign .el-card__header {
        border-top: 6px solid blue;
    }
    .dashboard-item .el-card__body {
        padding: 0;
    }
    .detailsbtn {
        float: right;
        margin-right: 20px;
    }
    .textdecoration {
        color: #409EFF;
        text-decoration: none;
    }
    .actionsbtn {
        border-top: 6px solid #67C23A;
    }
    .cardbody {
        padding: 20px;
    }
    .hidebtn {
        color: #000000;
        margin-left: 20px;
    }
    .title {
        font-size: 24px;
        font-weight: 600;
    }
</style>