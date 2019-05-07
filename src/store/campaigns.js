import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

window.storeCampaings = new Vuex.Store({
  state: {
    companies: {},
    companiesFirst: {},
    soloCompany: {}
  },
  actions: {
    LOAD_COMPANIES_INFO ({commit, state}) {
      state.companies = {}
      window.axios.get('/campaigns')
        .then(res => {
          commit('SAVE_COMPAINES_INFO', {companies: res.data.campaigns})
          commit('SAVE_COMPAINES_FIRST', {companiesFirst: res.data.campaigns.splice(0, 7)})

          if (window.location.href.split('/')[3] === 'campaings') {
            let companySolo = {}
            res.data.campaigns.map((item) => {
              if (item.id === window.location.href.split('/')[4]) {
                companySolo = item
                commit('SAVE_SOLO_COMPANY', {soloCompany: companySolo})
              }
            })
          }
        })
    }

  },
  mutations: {
    SAVE_COMPAINES_INFO (state, {companies}) {
      state.companies = companies
    },

    SAVE_COMPAINES_FIRST (state, {companiesFirst}) {
      state.companiesFirst = companiesFirst
    },

    SAVE_SOLO_COMPANY (state, {soloCompany}) {
      state.soloCompany = soloCompany
    }

  },
  getters: {
    getCompaniesInfo (state) {
      return state.companies
    },
    getCompaniesInfoFirst (state) {
      return state.companiesFirst
    },
    getSoloCompanyInfo (state) {
      return state.soloCompany
    }

  }
})
