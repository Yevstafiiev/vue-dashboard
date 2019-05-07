// store contest
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

window.storePosts = new Vuex.Store({
  state: {
    postsInstagram: [],
    postsFacebook: [],
    postsTwitter: [],
    postsYoutube: []
  },
  actions: {
    LOAD_POST_INFO ({commit, state, dispatch}) {
      state.postsInstagram = {}
      state.postsFacebook = {}
      state.postsTwitter = {}
      state.postsYoutube = {}
      let arrInst = {
        pending: [],
        approved: [],
        rejected: []
      }
      let arrFacebook = {
        pending: [],
        approved: [],
        rejected: []
      }
      let arrTwitter = {
        pending: [],
        approved: [],
        rejected: []
      }
      let arrYoutube = {
        pending: [],
        approved: [],
        rejected: []
      }
      window.axios.get('/posts')
        .then(res => {
          let posts = res.data.posts
          posts.map((item) => {
            let social = item.social_network
            switch (social) {
              case 'instagram':
                dispatch('SORT_ARRAY', {arr: arrInst, item: item})
                break
              case 'facebook':
                dispatch('SORT_ARRAY', {arr: arrFacebook, item: item})
                break
              case 'twitter':
                dispatch('SORT_ARRAY', {arr: arrTwitter, item: item})
                break
              case 'youtube':
                dispatch('SORT_ARRAY', {arr: arrYoutube, item: item})
                break
            }
          })

          commit('SAVE_POST_INST', {postsInstagram: arrInst})
          commit('SAVE_POST_FACE', {postsFacebook: arrFacebook})
          commit('SAVE_POST_TWIT', {postsTwitter: arrTwitter})
          commit('SAVE_POST_YOUTUBE', {postsYoutube: arrYoutube})
        })
    },
    SORT_ARRAY ({}, params) {
      switch (params.item.status) {
        case 'pending':
          params.arr['pending'].push(params.item)
          break
        case 'rejected':
          params.arr['rejected'].push(params.item)
          break
        case 'approved':
          params.arr['approved'].push(params.item)
          break
      }
    }

  },
  mutations: {
    SAVE_POST_INST (state, {postsInstagram}) {
      state.postsInstagram = postsInstagram
    },

    SAVE_POST_FACE (state, {postsFacebook}) {
      state.postsFacebook = postsFacebook
    },

    SAVE_POST_TWIT (state, {postsTwitter}) {
      state.postsTwitter = postsTwitter
    },
    SAVE_POST_YOUTUBE (state, {postsYoutube}) {
      state.postsYoutube = postsYoutube
    }

  },
  getters: {
    getPostsInst (state) {
      return state.postsInstagram
    },
    getPostsFace (state) {
      return state.postsFacebook
    },
    getPostsTwit (state) {
      return state.postsTwitter
    },
    getPostsYou (state) {
      return state.postsYoutube
    }

  }
})
