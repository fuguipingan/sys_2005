import axios from "./config";

//登入接口
export const login = (username,password)=> axios({
    url:"/users/login",
    method: "post",
    data:{
        username,
        password,
    },
})

//获取登录日志
export const getLoginLog = () => axios.get("/getloginlog");

//获取权限菜单
export const getMenuList = () => axios.get("/permission/getMenuList");
