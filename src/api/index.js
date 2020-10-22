import axios, { CancelToken } from "./config";

//登入接口
export const login = (username, password) => axios({
    url: "/users/login",
    method: "post",
    data: {
        username,
        password,
    },
})

//获取登录日志
/* 
**
*@parm {Object} _this 一个组件实例
*
*/
export const getLoginLog = (_this) => axios.get("/getloginlog", {
    cancelToken: new CancelToken(function (c) {
        // console.log(c)
        _this.cancel = c;//相当于给组件实例 添加一个cancel属性
    })
});

//获取权限菜单
export const getMenuList = () => axios.get("/permission/getMenuList");
