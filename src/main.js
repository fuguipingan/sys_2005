import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


//引入css样式
import "./assets/fonts/iconfont.css";
import "@/assets/styles/base.css";
import "@/assets/styles/el-reset.css";

//引入Element-ui,全局引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);//注册为全局组件

// //按需引入
// import { Carousel } from 'element-ui';//引入模块
// Vue.component("el-carousel", Carousel);//注册组件


Vue.config.productionTip = false;

//路由前置钩子（导航守卫）
router.beforeEach((to, from, next) => {
  // store.dispatch("FETCH_MENULIST")
  // console.log(to)
  // console.log(from)
  let token = localStorage.getItem("qf-2005");
  if (token) {
    //如果是注册或者登陆页面，直接放行；
    if(!store.state.sideMenu.length){//判断是否为第一次进入页面，是sodeMenu为空数组
      store.dispatch("FETCH_MENULIST")
      .then(res=>{
        next({path:to.path})//
        //这里要注意, next里面要传参数即要进入的页面的路由信息，因为next传参数后，当前要进入的路由会被废止，转而进入参数对应的路由，虽然是同一个路由，这么做主要是为了确保addRoutes生效了。
      })
      .catch(err=>{
        console.log(err);
      })
    }else{//
      next()
    }
    
  } else {//没有token，
    if (to.path === "/login") {//访问登陆页面可以
      next()
    }else{//没有访问登陆页，跳转到登录页
      next({path:"/login"});
    }
  }
  // next();

})

// import "./utils/recursionRoutes.js"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");




