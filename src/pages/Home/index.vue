<template>
  <div class="home">
    <el-container>
      <!-- 左侧边栏 -->
      <el-aside>
        <h1 class="login"></h1>
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航一</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航二</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 右侧边栏 -->
      <el-container>
        <!-- 顶部栏 -->

        <el-header>
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="6"
              ><div class="grid-content bg-purple">
                <!-- 侧边栏伸缩 -->
                <el-radio-group
                  v-model="isCollapse"
                >
                
                <!-- <el-radio-button :label="flag"  >
                   <i class="el-icon-s-unfold" :class="flag? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
                    
                  </el-radio-button> -->
                  <el-radio-button  :label="false" v-if="flag">
                  <i class="el-icon-s-fold"  @click="flag = !flag"></i>
                    
                  </el-radio-button>
                  <el-radio-button   :label="true" v-else>
                     <i class="el-icon-s-unfold"  @click="flag = !flag"></i>
                     
                  </el-radio-button>
                </el-radio-group></div
            ></el-col>
            <el-col :span="6"
              ><div class="grid-content bg-purple-light">
               
                千峰管理系统
              </div></el-col
            >
            <el-col :span="6"
              ><div class="grid-content bg-purple">
                <el-avatar :src="circleUrl"></el-avatar>
                <span>
                  欢迎您:
                </span>

                <b class="username">
                  {{ userInfo.nickname }}
                </b>
                <span class="sign-out" @click="quit">
                  退出
                </span>
              </div></el-col
            >
          </el-row>
        </el-header>
        <!-- 主体 -->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
.home .head-portrait{
  margin: 0 10px;
      vertical-align: middle;
}
.home .sign-out {
  color: red;
  cursor: pointer;
  margin: 0 10px;
}
.home .top-title {
  min-height: 60px;
  border-radius: 4px;
  display: block;
  color: rgb(255, 255, 255);
  text-align: center;
  line-height: 60px;
}
.home .option {
  color: white;
}
.home .login {
  height: 60px;
  background: linear-gradient(135deg, #4c67ff, #5635df);
  background-image: url("../../assets/imgs/login-left.png");
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: 50%;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
<style>
.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

<script>
import { getLoginLog } from "@/api";
import { mapState } from "vuex";
// import subMenu from "../../components/subMenu"
export default {
  data() {
    return {
      flag : false,
      isCollapse: true,
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", "small"],
        size:""
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    quit() {
      //退出按钮
      //点击退出，删除token数据和userInfo数据，跳转登录页面
      localStorage.removeItem("qf-2005");
      localStorage.removeItem("qf-userInfo");
      this.$router.push("/login");
    },
    switch1(){//侧边栏切换状态
    console.log(1)
      this.flag = !this.flag;
    }
  },
  mounted() {
    getLoginLog()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>