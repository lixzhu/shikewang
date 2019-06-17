<template>
    <div class="login lxq">
        <i class="iconfont icon-jiantou-ios" @click="gotoBack()"></i>
        <div class="logo">
            <img src="../img/logoNew.png" >   
        </div>
        <div id="loginpart">
            <p class="mianmi" >密码登录</p>
            <div class="loginbox">
                <ul>
                    <li style="border-bottom: 1px solid #eee">
                        <div>
                            <i slot="prefix" class="iconfont icon-shouji"></i>
                            <input type="text" placeholder="请输入用户名" v-model="username">
                        </div>
                    </li>
                    <li>
                        <div>
                            <i slot="prefix" class="iconfont icon-suo"></i>
                            <input type="password" placeholder="请输入密码" v-model="password">
                        </div>
                    </li>
                </ul>
            </div>
            <div class="button-group">
                <input type="button" value="登陆" @click="gotoLogin()">
                <router-link to="/register">
                    <input type="button" value="注册">
                </router-link>
            </div>
        
            <div class="link-group" >
                <ul class="fl-row-around">
                    <li>
                        <a href="#" ><img src="../img/qqIcon.png"></a>
                    </li>
                    <li>
                        <a href="#" ><img src="../img/weiboIcon.png" alt=""></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      username: "",
      password: ""
    };
  },
  created() {
    this.$store.state.isShowMfooter = false;
    this.$store.state.isShowdushi = false;
  },
  methods: {
    gotoBack() {
      this.$router.go(-1);
    },
    gotoLogin() {
      if (this.$store.state.users != "") {
        const h = this.$createElement;
        this.$notify({
          title: "提醒",
          message: h("i", { style: "color: teal" }, "请退出在登陆")
        });
      } else {
        if (this.username != "" && this.password != "") {
          var logininf = {};
          logininf["name"] = this.username;
          logininf["password"] = this.password;
          this.$store.commit("checkLoginuser", logininf);
          //判断用户名和password匹配
          if (this.$store.state.isLogin == true) {
            this.$router.push({
              path: `/my`
            });
          } else {
            this.$store.state.users = "";
            const h = this.$createElement;
            this.$notify({
              title: "提醒",
              message: h("i", { style: "color: teal" }, "密码或用户名有误")
            });
          }
        } else {
          const h = this.$createElement;
          this.$notify({
            title: "提醒",
            message: h("i", { style: "color: teal" }, "请完善填写信息")
          });
        }
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  padding: 0 32px;
}
.icon-jiantou-ios {
  position: absolute;
  display: block;
  width: 22px;
  height: 22px;
  top: 10px;
  left: 10px;
  font-size: 22px;
  font-weight: 700;
  color: #ccc;
}
.logo {
  padding: 50px 0;
  text-align: center;
}
.logo img {
  width: 20%;
}
p.mianmi {
  height: 36px;
  color: #a5adba;
  font-size: 16px;
  padding: 8px 0px;
  text-align: left;
}
.loginbox {
  height: 110px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 20px 0px rgba(121, 152, 215, 0.2);
  border-radius: 12px;
  color: #999;
  margin-bottom: 16px;
}
.loginbox ul li {
  list-style: none;
  height: 54px;
  padding: 15px 8px;
}
.loginbox ul li div i {
  float: left;
  width: 24px;
  height: 24px;
  padding: 4px;
  color: #999;
}
.loginbox ul li div input {
  float: left;
  width: 236px;
  height: 24px;
  line-height: 24px;
  margin-left: 8px;
}
.button-group {
  height: 110px;
}
.button-group input {
  display: block;
  width: 100%;
  height: 38px;
  color: #fff;
  font-size: 14px;
  margin: 0 0 16px;
  padding: 10px;
  background: rgba(252, 59, 114, 1);
  border-radius: 18px;
}
.link-group {
  width: 64%;
  margin: 0 auto;
  height: 70px;
}
.fl-row-around {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
.fl-row-around li {
  list-style: none;
  padding: 8px;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 10%;
  flex: 1 1 10%;
  text-align: center;
}
.fl-row-around li img {
  width: 50px;
  height: 50px;
}
</style>


