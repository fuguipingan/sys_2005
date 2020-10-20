import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//设置当页面重新加载时，获取localstrong中的userInfo
let userInfo = localStorage.getItem("qf-userInfo") || {}
userInfo = JSON.parse(userInfo)


export default new Vuex.Store({
  state: {
    userInfo,
  },
  mutations: {
    SET_USERINFO(state,payload){
      // console.log( payload)
      state.userInfo = payload;
    },
  },
  actions: {},
  modules: {}
});
