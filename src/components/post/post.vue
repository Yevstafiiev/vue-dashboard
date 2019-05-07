<template>
    <el-col :span="8">
    <div v-if="post.status===this.type" class="post-item">
        <el-card :body-style="{ padding: '0px' }" class="box-card">
            <div slot="header" class="clearfix">
                <el-row>
                    <el-col :span="4"><img class="author-pic" :src="post.author_pic"/></el-col>
                    <el-col :span="20">
                        <span>@{{post.author_username}}</span>
                        <p><router-link :to="post.link">{{post.social_network}}</router-link></p>
                    </el-col>
                </el-row>
            </div>
            <div class='holder'>
                <img class="post-pic" :src="post.pic"/>
                <div class="post-caption">{{post.caption}}</div>
            </div>
            <el-row class="likesrow">
                <el-col :span="12">
                    <p>LIKES</p>
                    <span class="post-stat-title">{{post.likes_number}}</span>
                </el-col>
                <el-col :span="12">
                    <p>COMMENTS</p>
                    <span class="post-stat-title">{{post.comments_number}}</span>
                </el-col>
            </el-row>
            <el-row class="btngroup">
                <el-col :span="12">
                    <template v-if="this.type==='pending' || this.type==='approved'">
                        <el-button class="rejectbtn" type="text" @click="changeStatus('rejected')">REJECT</el-button>
                    </template>
                </el-col>
                <el-col :span="12">
                    <template v-if="this.type==='pending' || this.type==='rejected'">
                        <el-button type="text"@click="changeStatus('approved')">APPROVE</el-button>
                    </template>
                </el-col>
            </el-row> 
        </el-card>
    </div>
    </el-col>
</template>
<script>
    export default  {
        name:'post',
        props:['post','type','array','index'],
        methods: {
            changeStatus(string) {
                this.post.status=string;
                this.$root.$emit('ChangeStat',this.post,string);
                 this.array[this.type].splice(this.index,1);

            }
        }
    }
</script>
<style>
    .time {
        font-size: 13px;
        color: #999;
    }
  
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
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
        width: 380px;
        margin-top: 24px;
    }
    .author-pic {
        width: 45px;
        height: 45px;
        border-radius: 50%;
    }
    .post-pic {
        width: 100%;
    }
    .btngroup {
        border-top: 1px solid grey;
        padding: 18px 20px;
    }
    .holder{
        position:relative;
        }
    .post-caption{
        position:absolute;
        left:0;
        bottom:0;
        right:0;
        background:rgba(255,255,255, 0.7);
        padding:20px;
        display:none;
    }
    .holder:hover .post-caption{
        display:block;
    }
    .likesrow {
        padding: 18px 20px;
    }
    .post-stat-title {
        font-size: 26px;
        font-weight: 600;
    }
    .rejectbtn {
        color: #000000;
    }
</style>