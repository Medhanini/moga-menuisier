export const state = () => ({
    list: {}
  })
  
  export const mutations = {
    setList(state, data) {
      state.list = data
    }
  }
  
  export const actions = {
    async nuxtServerInit({ dispatch, store, context , error}) {
      await dispatch('getList')
    },
    async getList({commit , context}, params) {
      import('~/data/data.json').then((data) => {
            commit('setList', data.results)
        }).catch(error => {
            console.log(error)
            console.log('error store getList')
        })
    }
  }
    