<template>
    <div class="Company">
        <p>{{getCompaniesInfo.name}}</p>
        <div class="Company-social">
            <el-tabs type="border-card" @tab-change="handleTabChange">
                <el-tab-pane label="instagram">
                    <el-tabs v-model="activeName">
                        <el-tab-pane label="pending" name="pending">
                            <div class="filter">
                                <div class="filter-keyword">
                                    <template v-for="(item,index) in this.keyArr">
                                        <span class="filter-keyitem">{{item}}<img class='cancelicon' @click=deleteItem(index) src="../assets/cancel.png"/></span>
                                    </template>
                                </div>
                                <input @keyup.enter="addToKeyArr" v-model="key" placeholder="Search..."/>
                                <button @click="filterPosts('inst')">Find</button>
                            </div>
                            <template v-for="(item,index) in getPostsInst.pending">
                                <post :post="item" type="pending" :array="getPostsInst" :index="index"></post>
                            </template>
                        </el-tab-pane>
                        <el-tab-pane label="approved" name="approved">
                            <template v-for="(item,index) in getPostsInst.approved">
                                <post :post="item" type="approved" :array="getPostsInst" :index="index"></post>
                            </template>
                        </el-tab-pane>
                        <el-tab-pane label="rejected" name="rejected">
                            <template v-for="(item,index) in getPostsInst.rejected">
                                <post :post="item" type="rejected" :array="getPostsInst" :index="index"></post>
                            </template>
                        </el-tab-pane>
                    </el-tabs>
                </el-tab-pane>
                <el-tab-pane label="youtube">
                    <el-tabs v-model="activeName">
                        <el-tab-pane label="pending" name="pending">
                            <div class="filter">
                                <div class="filter-keyword">
                                    <template v-for="(item,index) in this.keyArr">
                                        <span class="filter-keyitem">{{item}}<img class='cancelicon' @click=deleteItem(index) src="../assets/cancel.png"/></span>
                                    </template>
                                </div>
                                <input @keyup.enter="addToKeyArr" v-model="key" placeholder="Search..."/>
                                <button @click="filterPosts('inst')">Find</button>
                            </div>
                            <template v-for="(item,index) in getPostsYou.pending">
                                <post :post="item" type="pending" :array="getPostsYou" :index="index"></post>
                            </template>
                        </el-tab-pane>
                        <el-tab-pane label="approved" name="approved">
                            <template v-for="(item,index) in getPostsYou.approved">
                                <post :post="item" type="approved" :array="getPostsYou" :index="index"></post>
                            </template>
                        </el-tab-pane>
                        <el-tab-pane label="rejected" name="rejected">
                            <template v-for="(item,index) in getPostsYou.rejected">
                                <post :post="item" type="rejected" :array="getPostsYou" :index="index"></post>
                            </template>
                        </el-tab-pane>
                    </el-tabs>
                </el-tab-pane>
                <el-tab-pane label="facebook">
                    <el-tabs v-model="activeName">
                        <el-tab-pane label="pending" name="pending">
                            <div class="filter">
                                <div class="filter-keyword">
                                    <template v-for="(item,index) in this.keyArr">
                                        <span class="filter-keyitem">{{item}}<img class='cancelicon' @click=deleteItem(index) src="../assets/cancel.png"/></span>
                                    </template>
                                </div>
                                <input @keyup.enter="addToKeyArr" v-model="key" placeholder="Search..."/>
                                <button @click="filterPosts('inst')">Find</button>
                            </div>
                            <template v-for="(item,index) in getPostsFace.pending">
                                <post :post="item" type="pending" :array="getPostsFace" :index="index"></post>
                            </template>
                        </el-tab-pane>
                        <el-tab-pane label="approved" name="approved">
                            <template v-for="(item,index) in getPostsFace.approved">
                                <post :post="item" type="approved" :array="getPostsFace" :index="index"></post>
                            </template>
                        </el-tab-pane>
                        <el-tab-pane label="rejected" name="rejected">
                            <template v-for="(item,index) in getPostsFace.rejected">
                                <post :post="item" type="rejected" :array="getPostsFace" :index="index"></post>
                            </template>
                        </el-tab-pane>
                    </el-tabs>
                </el-tab-pane>
                <el-tab-pane label="twitter">
                    <el-tabs v-model="activeName">
                        <el-tab-pane label="pending" name="pending">
                            <div class="filter">
                                <div class="filter-keyword">
                                    <template v-for="(item,index) in this.keyArr">
                                        <span class="filter-keyitem">{{item}}<img class='cancelicon' @click=deleteItem(index) src="../assets/cancel.png"/></span>
                                    </template>
                                </div>
                                <input @keyup.enter="addToKeyArr" v-model="key" placeholder="Search..."/>
                                <button @click="filterPosts('twit')">Find</button>
                            </div>
                            <template v-for="(item,index) in getPostsTwit.pending">
                                <post :post="item" type="pending" :array="getPostsTwit" :index="index"></post>
                            </template>
                        </el-tab-pane>
                        <el-tab-pane label="approved" name="approved">
                            <template v-for="(item,index) in getPostsTwit.approved">
                                <post :post="item" type="approved" :array="getPostsTwit" :index="index"></post>
                            </template>
                        </el-tab-pane>
                        <el-tab-pane label="rejected" name="rejected">
                            <template v-for="(item,index) in getPostsTwit.rejected">
                                <post :post="item" type="rejected" :array="getPostsTwit" :index="index"></post>
                            </template>
                        </el-tab-pane>
                    </el-tabs>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import post from './post/post'

    Vue.component('post',post);
    export default  {
        data() {
          return {
              tabIndexActive:0,
              keyArr:[],
              key:'',
              base:{
                  inst:[],
                  face:[],
                  twitter:[],
                  youtube:[],
              },
              filterCount:0,
              activeName: 'pending'
          }
        },
        computed: {
            getCompaniesInfo() {
                this.baseInst=window.storeCampaings.getters.getSoloCompanyInfo;
                return window.storeCampaings.getters.getSoloCompanyInfo;
            },
            getPostsInst() {
                return window.storePosts.getters.getPostsInst;
            },
            getPostsFace() {
                return window.storePosts.getters.getPostsFace;
            },
            getPostsTwit() {
                return window.storePosts.getters.getPostsTwit;
            },
            getPostsYou() {
                return window.storePosts.getters.getPostsYou;
            },
        },
        mounted() {
            window.storeCampaings.dispatch('LOAD_COMPANIES_INFO');
            window.storePosts.dispatch('LOAD_POST_INFO');
            this.$root.$on('ChangeStat', (post,string) => {
                this.getPostsInst[string].push(post);
            });
        },
        methods:{
            addToKeyArr() {
                if (this.keyArr.indexOf(this.key) === -1) {
                    this.keyArr.push(this.key);
                    this.key='';
                }
            },
            handleTabChange(tabIndex) {
               this.tabIndexActive=tabIndex;
            },
            filterPosts(type) {
                let arr=[];
                if (this.filterCount === 0){
                    this.base.inst=this.getPostsInst.pending;
                    this.base.face=this.getPostsFace.pending;
                    this.base.twitter=this.getPostsTwit.pending;
                    this.base.youtube=this.getPostsYou.pending;
                }
                this.filterCount++;
                if (this.keyArr.length) {
                    this.base[type].map((item) => {
                    for (let i = 0; i < this.keyArr.length; i++) {
                            if (item.caption.indexOf(this.keyArr[i])!==-1) {
                                arr.push(item);
                                break;
                            }
                    }
                    });
                    switch (this.tabIndexActive) {
                        case 0:
                            this.getPostsInst.pending=arr;
                            break;
                        case 1:
                            this.getPostsYou.pending=arr;
                            break;
                        case 2:
                            this.getPostsTwit.pending=arr;
                            break;
                        case 3:
                            this.getPostsFace.pending=arr;
                            break;
                    }
                }
                else {
                    switch (this.tabIndexActive) {
                        case 0:
                            this.getPostsInst.pending=this.base[type];
                            break;
                        case 1:
                            this.getPostsYou.pending=this.base[type];
                            break;
                        case 2:
                            this.getPostsTwit.pending=this.base[type];
                            break;
                        case 3:
                            this.getPostsFace.pending=this.base[type];
                            break;
                    }
                }
            },
            deleteItem(index) {
                this.keyArr.splice(index,1);
            }
        }
    }
</script>
<style>
    .cancelicon {
        width: 13px;
    }
</style>