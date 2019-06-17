<template>
    <div class="list">
        <div class="listnav">
            <i class="iconfont icon-jiantou-ios" @click="gotoBack()"></i>
            <ul>
                <li  @click="toshopgood()">
                    <span id="shopgood">商品</span>
                </li>
                <li @click="tosaying()">
                    <span id="saying">评价</span>
                </li>
                <li @click="togooddec()">
                    <span id="gooddec" >详情</span>
                </li>
            </ul>
            <router-link to="/">
                <i class="iconfont icon-shouye"></i>
            </router-link>
        </div>
        <div>
            <div class="imgbox">
                <img :src="allData[param].img" alt="">
            </div>
            <div class="price">
                <!-- <i>￥</i> -->
                <span v-text="allData[param].price"></span>
                <b v-text="allData[param].oldprice"></b>
                <b style="text-decoration: none;">直降</b>
            </div>
            <div class="goodsdec">
                <div class="goodtitle" v-text="allData[param].texts"></div>
                <div class="gooduse">抵御紫外线侵害，LACREON水凝科技，让你的双眼水润舒适一整天。</div>
                <div class="goodother">【舒日升级版，安视优恒润氧硅水凝胶日抛】</div>
                <div class="question">
                    <p class="left">
                        <i class="iconfont icon-wenti"></i>
                        <span>常见问题</span>
                    </p>
                    <p class="right"><span v-text="allData[param].salenum"></span> 好评</p>
                </div>
            </div>

        </div>

        <div class="goodsactivity">
            <div class="juan">
                <p>
                    <span class="one">领券</span>
                    <span class="two">满399减50</span>
                    <span class="two">满199减25</span>
                </p>
                <i class="iconfont icon-arrow-right-copy-copy-copy"></i>
            </div>
            <div class="cuxiao">
                <p>
                   
                    <span class="one">促销</span>
                    <span class="two">卷</span>
                    <span class="three">国内购 | 实付满299元返100元无门槛券（每人限1次）</span>
                </p>
                <i class="iconfont icon-arrow-right-copy-copy-copy"></i>
            </div>
            <div class="ico">
                <span>
                    <i class="iconfont icon-weibiaoti-"></i>
                    <b>满60包邮</b>
                </span>
                <span>
                    <i class="iconfont icon-weibiaoti-"></i>
                    <b>正品保证</b>
                </span>
                <span>
                    <i class="iconfont icon-weibiaoti-"></i>
                    <b>官方资质</b>
                </span>
                <span>
                    <i class="iconfont icon-weibiaoti-"></i>
                    <b>极速物流</b>
                </span>
            </div>
        </div>
        <div class="goodsdata">
            <div>
                <p>
                    <span class="one">参数</span>
                    <span class="two">品牌、材质、含水量等</span>
                </p>
                <i class="iconfont icon-arrow-right-copy-copy-copy"></i>
            </div>
            <div>
                <p>
                    <span class="one">右眼</span>
                    <span class="two">请选择</span>
                </p>
                <i class="iconfont icon-arrow-right-copy-copy-copy" @click="selectNum()"></i>
            </div>
            <div>
                <p>
                    <span class="one">左眼</span>
                    <span class="two">请选择</span>
                </p>
                <i class="iconfont icon-arrow-right-copy-copy-copy" @click="selectNum()"></i>
            </div>
            <div>
                <div>
                    <p class="last" style="float: left;">
                        <i class="iconfont icon-wenti"></i>
                        <span>不知道如何选择度数</span>
                    </p>
                    <p class="last" style="float: right;">
                        <i class="iconfont icon-wenti"></i>
                        <span>计价单位说明</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="appraise">
            <section class="saying">
                <div class="title">
                    <p class="left">
                        <span class="xian"></span>
                        <span class="pingjia">
                            评价
                            <i>(1412)</i>
                        </span>
                        <span class="haoping">
                            好评度
                            <i>97%</i>
                        </span>
                    </p>
                    <p class="right">
                        <span>查看全部</span>
                        <i class="iconfont icon-arrow-right-copy-copy-copy"></i>
                    </p>
                </div>
                <div class="classed">
                    <ul>
                        <li>
                            <span>超舒适</span>
                            <i>（224）</i>
                        </li>
                        <li>
                            <span>水润保湿</span>
                            <i>（225）</i>
                        </li>
                        <li>
                            <span>易摘戴</span>
                            <i>（254）</i>
                        </li>
                        <li>
                            <span>长久佩戴</span>
                            <i>（2204）</i>
                        </li>
                        <li>
                            <span>性价比高</span>
                            <i>（84）</i>
                        </li>
                        <li>
                            <span>发货很快</span>
                            <i>（144）</i>
                        </li>
                        <li>
                            <span>正品</span>
                            <i>（458）</i>
                        </li>
                        <li>
                            <span>高清</span>
                            <i>（55）</i>
                        </li>
                        <li>
                            <span>价格便宜</span>
                            <i>（552）</i>
                        </li>
                        <li>
                            <span>初戴者</span>
                            <i>（145）</i>
                        </li>
                    </ul>
                </div>
                <div class="customersay">
                    <div>
                        <p class="user">***0100***</p>
                        <p class="usersay">优惠很到位 质量很放心</p>
                    </div>
                    <div>
                        <p class="user">***0100***</p>
                        <p class="usersay">优惠很到位 质量很放心</p>
                    </div>
                </div>
            </section>
            <section class="photo">
                <div class="title">
                    <p class="left">
                        <span class="xian"></span>
                        <span class="pingjia">
                            秀图
                        </span>
                    </p>
                    <p class="right">
                        <span>查看全部</span>
                        <i class="iconfont icon-arrow-right-copy-copy-copy"></i>
                    </p>
                </div>  
                <div class="img">
                    <ul>
                        <li>
                            <img src="../img/list_1.png" alt="">
                        </li>
                        <li>
                            <img src="../img/list_2.png" alt="">
                        </li>
                    </ul>
                </div>
            </section>
        </div>
        <div class="gooddetailed">
             <div class="title">
                <p class="left">
                    <span class="xian"></span>
                    <span class="pingjia">
                        图文详细
                    </span>
                </p>
            </div>
            <div>
                <ul>
                    <li>
                        <img src="../img/listdetailed1.jpg" alt="">
                    </li>
                   <li>
                        <img src="../img/listdetailed2.jpg" alt="">
                    </li>
                    <li>
                        <img src="../img/listdetailed3.jpg" alt="">
                    </li>
                    <li>
                        <img src="../img/listdetailed4.jpg" alt="">
                    </li>
                   <li>
                        <img src="../img/listdetailed5.jpg" alt="">
                    </li>
                    <li>
                        <img src="../img/listdetailed6.jpg" alt="">
                    </li>
                   <li>
                        <img src="../img/listdetailed7.jpg" alt="">
                    </li>
                    <li>
                        <img src="../img/listdetailed8.jpg" alt="">
                    </li>
                    <li>
                        <img src="../img/listdetailed9.jpg" alt="">
                    </li>
                   <li>
                        <img src="../img/listdetailed10.jpg" alt="">
                    </li>
                    <li>
                        <img src="../img/listdetailed11.jpg" alt="">
                    </li>
                   <li>
                        <img src="../img/listdetailed12.jpg" alt="">
                    </li>
                    <li>
                        <img src="../img/listdetailed13.jpg" alt="">
                    </li>
                   <li>
                        <img src="../img/listdetailed15.jpg" alt="">
                    </li>
                    <li>
                        <img src="../img/listdetailed16.jpg" alt="">
                    </li>
                   <li>
                        <img src="../img/listdetailed17.jpg" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="jionCart">
          <div class="left">
            <p>
              <i class="el-icon-service"></i>
              <span>客服</span>
            </p>
            <p>
              <i class="el-icon-star-off"></i>
              <span>收藏</span>
            </p>
            <p>
              <router-link class="cartcss" to="/cart">
                <i class="el-icon-shopping-cart-2" style="display:block;color:#5e6c84;"></i>
                <span style="display:block; color:#5e6c84;">购物车</span>
              </router-link>
            </p>
          </div>
          <div class="right">
            <span style=" border-radius: 20px 0 0 20px;" @click="jionincart()">加入购物车</span>
            <span style=" border-radius: 0 20px 20px 0;">去结算</span>
          </div>
      </div>
    </div>
</template>
<script lang="ts">
import request from "../lib/request";
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      allData: [],
      param: ""
    };
  },
  created() {
    this.getShopList();
    this.$store.state.isShowMfooter = false;
    this.$store.state.isShowdushi = false;
    this.$store.state.isShowJionCart = true;
    //获取传入的参数
    this.param = this.$route.query.id;
  },
  mounted() {
    window.addEventListener("scroll", this.floor);
    window.addEventListener("scroll", this.toshopgood);
    window.addEventListener("scroll", this.tosaying);
    window.addEventListener("scroll", this.togooddec);
    
  },
  methods: {
    async getShopList() {
      const { g, p } = request;
      const data = await g({
        url:
          "https://www.easy-mock.com/mock/5cff63c7daa05f1d4b21f571/example_copy/keshilist"
      });
      this.allData = [...this.allData, ...data.data.alldata];
    },
    floor() {
      let t = document.documentElement.scrollTop || document.body.scrollTop;
      let shopgood = document.getElementById("shopgood");
      let saying = document.getElementById("saying");
      let gooddec = document.getElementById("gooddec");
      if (t < 797) {
        shopgood.style.color = "#fc3b72";
        saying.style.color = "#000";
        gooddec.style.color = "#000";
      } else if (t >= 797 && t < 1149) {
        shopgood.style.color = "#000";
        saying.style.color = "#fc3b72";
        gooddec.style.color = "#000";
      } else if (t >= 1149) {
        shopgood.style.color = "#000";
        saying.style.color = "#000";
        gooddec.style.color = "#fc3b72";
      }
    },
    // toshopgood() {
    //   document.documentElement.scrollTop = 0;
    // },
    // tosaying() {
    //   document.documentElement.scrollTop = 797;
    // },
    // togooddec() {
    //   document.documentElement.scrollTop = 1149;
    // },
    gotoBack() {
      this.$router.go(-1);
    },
    selectNum() {
      this.$store.state.isShowdushi = true;
      this.$store.state.isShowmack = true;
    },
    //加入购物车
    jionincart() {
      if (this.$store.state.size != "") {
        this.allData[this.param].sizes = this.$store.state.size;
        this.allData[this.param].many = 1
        var cartarr = this.allData[this.param]
        this.$store.commit("jionInTheCart",cartarr)
        if(this.$store.state.jionedCart == true){
          const h = this.$createElement;
          this.$notify({
            title: "提醒",
            message: h("i", { style: "color: teal" }, "成功加入购物车")
          });
          this.$store.state.size = ''
        }else{
          const h = this.$createElement;
          this.$notify({
            title: "提醒",
            message: h("i", { style: "color: teal" }, "加入购物车失败")
          });
        }
      } else {
        const h = this.$createElement;
        this.$notify({
          title: "提醒",
          message: h("i", { style: "color: teal" }, "请选择镜片的度数")
        });
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.floor);
    window.removeEventListener("scroll", this.toshopgood);
    window.removeEventListener("scroll", this.tosaying);
    window.removeEventListener("scroll", this.togooddec);
  }
});
</script>

<style lang="scss" scoped>
.jionCart {
  width: 100%;
  background: #fff;
  height: 55px;
  padding: 8px 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  color: #172b4d;
  position: fixed;
  bottom: 0;
  z-index: 200;
  .left {
    float: left;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    width: 150px;
    p {
      color: rgb(94, 108, 132);
      display: flex;
      flex-flow: column wrap;
      font-size: 16px;
      align-items: center;
      justify-content: center;
      .cartcss{
        display: block;
      }
    }
  }
  .right {
    float: right;
    width: 200px;
    padding-right: 10px;
    span {
      display: block;
      float: left;
      background: linear-gradient(
        90deg,
        rgba(252, 59, 114, 0.78) 0%,
        rgb(252, 59, 114) 100%
      );
      color: #fff;
      width: 50%;
      text-align: center;
      padding: 10px 0;
    }
  }
}
#shopgood {
  color: #ff516c;
}
.list {
  background: rgba(192, 192, 192, 0.2);
}
.listnav {
  width: 100%;
  position: fixed;
  display: flex;
  top: 0;
  height: 41px;
  padding: 0 12px;
  line-height: 41px;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  i {
    font-weight: 600px;
    font-size: 20px;
  }
  ul {
    width: 60%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    li {
      float: left;
      span {
        color: #000;
        font-size: 13px;
        padding: 12px 0px;
      }
    }
  }
}
.imgbox {
  height: 375px;
  width: 100%;
  margin-top: 41px;
  img {
    width: 100%;
    height: 100%;
  }
}
.price {
  width: 100%;
  height: 60px;
  background: rgba(252, 59, 114, 1) 100%;
  text-align: left;
  line-height: 60px;
  span {
    font-size: 28px;
    color: #fff;
    margin-right: 12px;
    display: inline-block;
  }
  i {
    color: #fff;
    font-size: 16px;
  }
}
b {
  font-size: 14px;
  text-decoration: line-through;
  color: #fff;
  font-weight: 400;
  margin-right: 5px;
}
.goodsdec {
  height: 118px;
  margin: 0 0 8px;
  padding: 12px 12px 0px;
  background: #fff;
  .goodtitle {
    text-align: left;
    height: 26px;
    padding: 0 0 6px;
    font-size: 16px;
    color: rgb(23, 43, 77);
  }
  .gooduse {
    height: 38px;
    font-size: 12px;
    color: rgb(94, 108, 132);
    padding: 0 0 6px;
    text-align: left;
  }
  .goodother {
    color: rgb(11, 89, 221);
    font-size: 12px;
    text-align: left;
  }
  .question {
    height: 18px;
    text-align: left;
    padding: 0 0 6px;
    .left {
      float: left;

      i {
        float: left;
        width: 12px;
        height: 12px;
        font-size: 12px;
        margin-top: 4px;
      }
      span {
        font-size: 12px;
        color: rgb(165, 173, 186);
      }
    }
    .right {
      float: right;
      font-size: 10px;
      color: rgb(165, 173, 186);
    }
  }
}
.goodsactivity {
  height: 132px;
  margin: 0 0 8px;
  padding: 12px 12px 0;
  background: #fff;
  text-align: left;
  .juan {
    height: 40px;
    padding: 0 0 10px;

    .one {
      color: #7e899d !important;
      font-size: 13px;
      margin-right: 16px;
      float: left;
    }
    .two {
      color: rgb(252, 59, 114);
      font-size: 13px;
      margin-right: 5px;
      border-radius: 8px;
      padding: 5px 14px;
      background: rgba(253, 57, 113, 0.1);
      float: left;
    }
  }
  i {
    float: right;
    width: 14px;
    height: 14px;
    font-size: 14px;
    margin-top: 6px;
    font-weight: 600;
  }

  .ico {
    height: 40px;
    padding: 0 0 10px;
    span {
      float: left;
      i {
        float: left;
        color: rgb(255, 84, 116);
        font-size: 12px;
        margin: 2px;
      }
      b {
        font-size: 12px;
        color: rgb(165, 173, 186);
        margin-right: 16px;
        text-decoration: none;
      }
    }
  }
  .cuxiao {
    height: 40px;
    padding: 0 0 10px;
    .one {
      color: #7e899d !important;
      font-size: 13px;
      margin-right: 16px;
      float: left;
    }
    .two {
      float: left;
      color: rgb(252, 59, 114);
      font-size: 13px;
      margin-right: 5px;
      border-radius: 8px;
      padding: 5px 14px;
      background: rgba(253, 57, 113, 0.1);
    }
    .three {
      float: left;
      color: rgb(126, 137, 157);
      font-size: 13px;
      width: 235px;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;
      overflow: hidden;
    }
  }
}
.goodsdata {
  height: 172px;
  margin: 0 0 8px;
  padding: 12px 12px 0;
  background: #fff;
  div {
    height: 40px;
    padding: 0 0 10px;
    p {
      float: left;
      .one {
        color: #7e899d !important;
        font-size: 13px;
        margin-right: 16px;
      }
      .two {
        color: #7e899d !important;
        font-size: 13px;
        margin-right: 16px;
      }
    }
    i {
      float: right;
      width: 14px;
      height: 14px;
      font-size: 14px;
      margin-top: 5px;
      font-weight: 600;
    }
    .last {
      float: left;
      font-size: 10px;
      color: #7e899d !important;
      overflow: hidden;
      span {
        float: left;
        margin-top: 5px;
      }
      i {
        float: left;
        width: 14px;
        height: 14px;
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
}
.appraise {
  height: 352px;
  margin: 0 0 8px;
  padding: 12px 12px 0;
  background: #fff;
  .title {
    height: 17px;
    .left {
      float: left;
      .xian {
        float: left;
        width: 2px;
        height: 16px;
        background-color: #ff516c;
        margin-right: 4px;
      }
      .pingjia {
        float: left;
        color: #172b4d !important;
        font-size: 13px;
        margin-right: 16px;
        line-height: 17px;
      }
      .haoping {
        color: #a5adba !important;
        float: left;
        font-size: 13px;
        margin-right: 16px;
        line-height: 17px;
        i {
          color: #ff516c;
        }
      }
    }
    .right {
      float: right;
      font-size: 13px;
      color: #ff516c;
      i {
        font-weight: 600;
      }
    }
  }
  .classed {
    height: 68px;
    margin-top: 16px;
    ul {
      li {
        float: left;
        font-size: 10px;
        margin: 0 10px 6px 0;
        padding: 2px 6px;
        background: RGBA(182, 189, 199, 0.1);
        color: RGBA(30, 49, 82, 0.5);
      }
    }
  }
  .customersay {
    height: 116px;
    div {
      height: 58px;
      padding: 10px 0;
      .user {
        text-align: left;
        color: #172b4d;
        font-size: 12px;
      }
      .usersay {
        text-align: left;
        height: 16px;
        margin-top: 6px;
        color: #172b4d;
        font-size: 12px;
      }
    }
  }
}
.photo {
  .title {
    height: 17px;
    .left {
      float: left;
      .xian {
        float: left;
        width: 2px;
        height: 16px;
        background-color: #ff516c;
        margin-right: 4px;
      }
      .pingjia {
        float: left;
        color: #172b4d !important;
        font-size: 13px;
        margin-right: 16px;
        line-height: 17px;
      }
    }
    .right {
      float: right;
      font-size: 13px;
      color: #ff516c;
      i {
        font-weight: 600;
      }
    }
  }
  .img {
    ul {
      height: 84px;
      margin-top: 10px;
      overflow: hidden;
      li {
        width: 24%;
        margin: 0px 0.5%;
        float: left;
        img {
          width: 100% !important;
          height: auto !important;
          vertical-align: bottom;
        }
      }
    }
  }
}
.gooddetailed {
  padding: 12px 12px 0;
  margin: 0 0 8px;
  background: #fff;
  .title {
    height: 17px;
    margin-bottom: 10px;
    .left {
      float: left;
      .xian {
        float: left;
        width: 2px;
        height: 16px;
        background-color: #ff516c;
        margin-right: 4px;
      }
      .pingjia {
        float: left;
        color: #172b4d !important;
        font-size: 13px;
        margin-right: 16px;
        line-height: 17px;
      }
    }
  }
  div {
    width: 100%;
    ul {
      li {
        img {
          width: 100% !important;
          height: auto !important;
          vertical-align: bottom;
        }
      }
    }
  }
}
</style>
