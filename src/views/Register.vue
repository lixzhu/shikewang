<template>
    <div class="login lxq">
        <div class="logo">
            <img src="../img/logoNew.png" >   
        </div>
        <!-- <el-button :plain="true"></el-button> -->
        <div id="loginpart">
            <p class="mianmi" >用户注册</p>
            <div class="loginbox">
                <ul>
                    <li style="border-bottom: 1px solid #eee">
                        <div>
                            <i slot="prefix" class="iconfont icon-shouji"></i>
                            <input type="text" placeholder="请输入手机号" v-model="username" @blur="isphone(username)">
                        </div>
                    </li>
                    <li style="border-bottom: 1px solid #eee">
                        <div>
                            <i slot="prefix" class="iconfont icon-suo"></i>
                            <input type="password" placeholder="请设置密码" v-model="password">
                        </div>
                    </li>
                    <li>
                        <div style="width:64%">
                            <i slot="prefix" class="iconfont icon-suo"></i>
                            <input type="text" placeholder="请输入验证码" v-model="code">
                        </div>
                        <div class="codebtn" v-text="checkCode" @click="createCode()"></div>
                        <!-- <input type="button" class="codeBtn" v-model="checkCode" @click="createCode()"/> -->
                    </li>
                </ul>
            </div>
            <div class="button-group">
                <input type="button" value="注册" @click="reg()">
                <router-link to="/login">
                    <input type="button" value="已有账号，去登陆">
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
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      checkCode: "获取验证码",
      code: ""
    };
  },
  created() {
    this.$store.state.isShowMfooter = false;
    this.$store.state.isShowdushi = false;
  },
  methods: {
    createCode() {
      var code = "";
      var codeLength = 4;
      var random = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m"
      );
      for (var i = 0; i < codeLength; i++) {
        var index = Math.floor(Math.random() * 62);
        code += random[index];
      }
      this.checkCode = code;
    },
    //正则验证手机号
    isphone(num) {
      var reg = /^1[3456789]\d{9}$/;
      if (!reg.test(num)) {
        const h = this.$createElement;
        this.$notify({
          title: "提醒",
          message: h("i", { style: "color: teal" }, "这不是一个手机号")
        });
      }
    },
    //判断手机号是否已经注册
    reg() {
      if (this.code.toUpperCase() == this.checkCode.toUpperCase()) {
        var a = {};
        a["name"] = this.username;
        a["password"] = this.password;
        this.$store.commit("checkUser", a);
        if (this.$store.state.bool == false) {
          const h = this.$createElement;
          this.$notify({
            title: "提醒",
            message: h("i", { style: "color: teal" }, "该手机号已注册了")
          });
        } else {
          const h = this.$createElement;
          this.$notify({
            title: "提醒",
            message: h(
              "i",
              { style: "color: teal" },
              "已注册成功，请记住账号和密码"
            )
          });
          
        }
      } else {
        const h = this.$createElement;
        this.$notify({
          title: "提醒",
          message: h("i", { style: "color: teal" }, "验证码错误")
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  padding: 0 32px;
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
  height: 164px;
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
  width: 80%;
  height: 24px;
  line-height: 24px;
  margin-left: 8px;
}
.loginbox ul li .codebtn {
  float: right;
  height: 28px;
  width: 90px;
  background: #eee;
  color: #999;
  font-size: 13px;
  line-height: 28px;
  text-align: center;
  border-radius: 10px;
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
  position: relative;
  z-index: -1;
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

