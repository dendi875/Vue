import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 通过 Vuex 来创建一个仓库并导出，仓库里有 state，是用来存放共用的数据
// 共用数据有哪些？有 city，默认值是北京
export default new Vuex.Store({
  state: {
    city: '上海'
  },
  actions: {
    changeCity (context, city) {
      // Actions 调用 Mutations 使用 commit 方法
      context.commit('changeCity', city)
    }
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
    }
  }
})
