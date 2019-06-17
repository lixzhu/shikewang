<template>
    <div>
        <div class="head">
            <div>
                <img src="../img/my_btn_SZ.png" alt="">
            </div>
        </div>
        <div class="headerFirst">
            <div style="height:58px;">
                <div class="box">
                    <img src="../img/my.png" alt="">
                </div>
                <router-link to="/login">
                    <div class="sigo1" v-text="userNum"></div>
                </router-link>
                    <span class="goout" @click="goOut()" v-if="isShow">退出</span>
            </div>
            <div class="afterlogin" v-if="isShow">
                <ul>
                    <li>
                        <p>
                            <span>100</span>
                            个
                        </p>
                        <span>
                            金币
                        </span>
                    </li>
                    <li>
                        <p>
                            <span>0</span>
                            张
                        </p>
                        <span>
                            优惠劵
                        </span>
                    </li>
                    <li>
                        <p>
                            <span>0</span>
                            元
                        </p>
                        <span>
                            收益
                        </span> 
                    </li>
                </ul>
            </div>
        </div>
        <div class="orderder">
            <div class="ordertop">
                <span class="left">我的订单</span>
                <router-link to="/order">
                    <span class="right">全部订单 &gt;</span>
                </router-link>
            </div>
            <div class="orderice">
                <ul>
                    <li>
                        <div>
                            <img src="../img/my_4.png" alt="">
                        </div>
                        <span>代收款</span>
                    </li>
                    <li>
                        <div>
                            <img src="../img/my_3.png" alt="">
                        </div>
                        <span>代发货</span>
                    </li>
                    <li>
                        <div style="line-height:52px;">
                            <img src="../img/my_6.png" alt="">
                        </div>
                        <span>待收货</span>
                    </li>
                    <li>
                        <div>
                            <img src="../img/my_5.png" alt="">
                        </div>
                        <span>待评价</span>
                    </li>
                    <li>
                        <div>
                            <img src="../img/my_11.png" alt="">
                        </div>
                        <span>售后</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="moreMes">
            <ul>
                <li>
                    <div>
                        <img src="../img/my_9.png" alt="">
                    </div>
                    <span>物流信息</span>
                </li>
                <li>
                    <div>
                        <img src="../img/my_13.png" alt="">
                    </div>
                    <span>收货地址</span>
                </li>
                <li>
                    <div>
                        <img src="../img/my_8.png" alt="">
                    </div>
                    <span>会员成长</span>
                </li>
                <li>
                    <div>
                        <img src="../img/my_15.png" alt="">
                    </div>
                    <span>我的资产</span>
                </li>
                <li>
                    <div><img src="../img/my_14.png" alt=""></div>
                    <span>我的收藏</span>
                </li>
                <li>
                    <div>
                        <img src="../img/my_16.png" alt="">
                    </div>
                    <span>消息盒子</span>
                </li>
                <li>
                    <div>
                        <img src="../img/my_1.png" alt="">
                    </div>
                    <span>我的客服</span>
                </li>
                <li>
                    <div>
                        <img src="../img/my_7.png" alt="">
                    </div>
                    <span>价格保护</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      userNum: "账号登陆 >",
      isShow: false
    };
  },
  created() {
    this.$store.state.isShowMfooter = true;
    if (this.$store.state.users != "") {
      this.isShow = true;
      this.userNum = this.$store.state.users;
      this.$store.state.isShowdushi = false;
    }
  },
  methods: {
      goOut(){
          this.$store.state.users = '';
          localStorage.removeItem('useringname');
          this.isShow = false;
          this.userNum = "账号登陆 >";
      }
  },
});
</script>

<style lang="scss" scoped>
.head {
  background: rgba(252, 59, 114, 1);
  width: 100%;
  height: 98px;
  div {
    margin: 10px 10px 0 0;
    float: right;
    img {
      width: 24px;
      height: 24px;
    }
  }
}
.headerFirst {
  width: 94%;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: -12%;
  border-radius: 8px;
  padding: 16px 0;
  background: #fff;
  border: 1px solid #eee;
  box-shadow: 0 4px 13px 0 rgba(121, 152, 215, 0.2);
  .box {
    float: left;
    padding-left: 2%;
    width: 25%;
    img {
      width: 70%;
      height: 70%;
      float: left;
    }
  }
  .goout {
    float: right;
    width: 20%;
    height: 26px;
    line-height: 26px;
    font-size: 14px;
    margin-top: 10px;
    color: #fc3b72;
  }
  .sigo1 {
    float: left;
    width: 45%;
    padding-top: 20px;
    text-align: left;
  }
  .afterlogin {
    height: 36px;
    margin-top: 21px;

    ul {
      display: flex;
      height: 100%;
      flex-flow: row wrap;
      align-items: center;
      justify-content: space-around;
      li {
        display: flex;
        flex: 1;
        flex-flow: column wrap;
        align-items: center;
        font-size: 16px;
        color: #fc3b72;
        p {
          span {
            font-size: 15px;
          }
          font-size: 15px;
          color: #ffa220;
        }
        span {
          font-size: 12px;
          color: #7e899d;
        }
      }
    }
  }
}
.orderder {
  height: 138px;
  width: 94%;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 16px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 4px 13px 0 rgba(121, 152, 215, 0.2);
  .ordertop {
    height: 52px;
    padding: 0px 2%;
    line-height: 52px;
    border-bottom: 1px solid #eee;
    .left {
      float: left;
      color: #182c4e;
      font-size: 13px;
    }
    .right {
      float: right;
      font-size: 13px;
      color: #a5adba;
    }
  }
  .orderice {
    height: 73px;
    ul {
      display: flex;
      height: 100%;
      flex-flow: row wrap;
      align-items: center;
      justify-content: space-around;
    }
    ul li {
      display: flex;
      flex: 1;
      flex-flow: column wrap;
      align-items: center;
      font-size: 16px;
      color: #fc3b72;
      div {
        height: 42px;
        img {
          width: 60%;
        }
      }
      span {
        display: block;
        height: 16px;
        font-size: 12px;
        padding-top: 4px;
        color: #7e899d;
      }
    }
  }
}
.moreMes {
  height: 258px;
  width: 94%;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 16px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 4px 13px 0 rgba(121, 152, 215, 0.2);
  ul {
    li {
      padding-top: 10px;
      float: left;
      width: 33.3%;
      height: 86px;
      div {
        img {
          width: 38px;
          height: 38px;
        }
      }
      span {
        display: block;
        height: 16px;
        font-size: 12px;
        padding-top: 4px;
        color: #7e899d;
      }
    }
  }
}
</style>
