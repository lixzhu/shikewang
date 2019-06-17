<template>
    <div style="margin-bottom:80px;">
         <div class="cartitle">
             <i class="iconfont icon-jiantou-ios" @click="gotoBack()"></i>
             <div>
                 <p>淘&nbsp;&nbsp;&nbsp;购</p>
             </div>
         </div>
         <div class="contentList" v-if="showOrHide">
             <ul>
                 <li class="itemlist" v-for="(a,index) in goodlist" :key="index">
                     <a class="cartImage" href="#####">
                         <img :src="a.img">
                    </a>
                    <div>
                        <div class="cartTitle">
                            <a href="####" v-text="a.texts"></a>
                            <i class="iconfont icon-chuyidong1-copy" @click="remove(index)"></i>
                        </div>
                        <div class="skuChose">
                            <div class="skuText" style="padding-left:10px;" > 
                                <span v-text="a.sizes.toFixed(2)"></span>
                                <!-- <i class="el-icon-arrow-right" @click="select(index)"></i>   -->
                            </div>
                        </div>
                        <div class="priceAndOperation Gold">
                            <span class="price" v-text="a.price">￥55 </span>
                            <span class="goldtext"></span>
                            <span class="couponhide"></span>
                            <div class="operationBtn"> 
                                <span class="sub">
                                    <i class="icon iconfont icon-icon_jia1" @click="reduce(a.many,index)">-</i>
                                </span>   
                                <span class="numtext" v-text="a.many"></span> 
                                <span class="add">
                                    <i class="icon iconfont icon-icon_jia" @click="add(a.many,index)">+</i>
                                </span> 
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
         </div>
         <div class="emptycart" v-if="isEmpty">
             <img src="../img/cart.png" alt="">
             <div class="emptyfont">购物车还是空的</div>
             <div class="emptyfont">去挑些中意的商品吧，亲</div>
             <div class="brn_list">
               <router-link class="tohome" to="/">
                  去首页
               </router-link>
               <router-link class="tosousuo" to="/">
                  去搜索
               </router-link>
             </div>
         </div>
         <div class="footnav">
           <div class="left">
             <img src="../img/delete.png" alt="">
             <span @click="removeAll">清空购物车</span>
           </div>
           <div class="right" @click="Order()">
             确人订单￥
             <span v-text="this.$store.getters.cartTotal"></span>
           </div>
         </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      goodlist: this.$store.state.cart,
      sum: "",
      isEmpty: "",
      showOrHide: ""
    };
  },
  created() {
    this.$store.state.isShowMfooter = false;
    this.$store.state.isShowdushi = false;
    if (this.$store.state.cart.length == 0) {
      this.isEmpty = true;
      this.showOrHide = false;
    } else {
      this.isEmpty = false;
      this.showOrHide = true;
    }
  },
  methods: {
    gotoBack() {
      this.$router.go(-1);
    },
    reduce(number, index) {
      if (number > 1) {
        this.goodlist[index].many = this.goodlist[index].many * 1 - 1;
        let numobj = {};
        numobj.num = this.goodlist[index].many;
        numobj.numindex = index;
        this.$store.commit("reducenum", numobj);
      } else {
        this.goodlist[index].many = 1;
        let numobj = {};
        numobj.num = 1;
        numobj.numindex = index;
        this.$store.commit("reducenum", numobj);
      }
    },
    add(number, index) {
      this.goodlist[index].many = this.goodlist[index].many * 1 + 1;
      let numobj = {};
      numobj.num = this.goodlist[index].many;
      numobj.numindex = index;
      this.$store.commit("addnum", numobj);
    },
    remove(index) {
      this.$store.commit("removegoods", index);
    },
    removeAll() {
      this.$store.commit("removeAllgoods");
      this.isEmpty = true;
      this.showOrHide = false;
    },
    Order(){
      this.$store.commit("goodsOrder");
      this.isEmpty = true;
      this.showOrHide = false;
      const h = this.$createElement;
      this.$notify({
        title: "提醒",
        message: h("i", { style: "color: teal" }, "已经加入订单，请前往订单页付款")
      });
    }
  },

};
</script>

<style lang="scss" scoped>
.cartitle {
  position: relative;
  position: fixed;
  top: 0;
  height: 44px;
  width: 100%;
  background: #fff;
  i {
    position: absolute;
    left: 10px;
    top: 13px;
    width: 22px;
    height: 22px;
    font-size: 22px;
    color: #bbb;
  }
  div {
    width: 60%;
    height: 100%;
    margin: 0 auto;
    p {
      height: 100%;
      text-align: center;
      line-height: 44px;
      // padding-left: 132px;
    }
  }
}
.emptycart {
  height: 318px;
  text-align: center;
  background: #eee;
  img {
    width: 79px;
    height: 79px;
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .emptyfont {
    text-align: center;
    color: rgba(23, 43, 77, 0.5);
    font-size: 13px;
  }
  .brn_list {
    height: 44px;
    text-align: center;
    margin: 16px 42px;
  }
  .tohome {
    float: left;
    width: 132px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    border-radius: 22px;
    color: #fff;
    background: rgba(252, 59, 114, 1);
  }
  .tosousuo {
    float: left;
    width: 132px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: rgba(252, 59, 114, 1);
    border-radius: 22px;
    border: 2px solid rgba(252, 59, 114, 1);
    margin-left: 16px;
  }
}
.contentList {
  display: auto;
  margin-top: 50px;
  ul {
    li {
      height: 126px;
      background: #fff;
      margin: 8px 8px 0 8px;
      padding: 0 0 13px;
      box-shadow: 0px 4px 20px 0px rgba(121, 152, 215, 0.5);
      border-radius: 8px;
      a {
        float: left;
        width: 100px;
        height: 100px;
        margin: 12px 10px 0 12px;
        img {
          width: 100px;
          height: 100px;
        }
      }
      div {
        float: left;
        width: 232px;
        .cartTitle {
          position: relative;
          a {
            display: block;
            color: #172b4d;
            width: 173px;
            height: 36px;
            font-size: 12px;
            margin: 12px 0 0;
            text-align: left;
          }
          i {
            position: absolute;
            width: 24px;
            height: 24px;
            top: 6px;
            right: 6px;
            font-size: 20px;
            color: rgba(165, 173, 186, 1);
          }
        }
        .skuChose {
          position: relative;
          .skuText {
            width: 120px;
            height: 26px;
            display: inline;
            padding: 5px 2px;
            background: rgba(165, 173, 186, 0.12);
            border-radius: 4px;
            font-size: 12px;
            text-align: left;
            color: #a5adba;
            i {
              margin-top: 5px;
              font-size: 12px;
              float: right;
              color: #a5adba;
              transform: rotate(90deg);
              position: relative;
              top: 0px;
              width: 24px;
              height: 24px;
            }
          }
        }
        .priceAndOperation {
          margin-top: 8px;
          .price {
            float: left;
            width: 32px;
            height: 20px;
            color: #fc3b72;
            font-size: 15px;
          }
          .goldtext {
            float: left;
            color: #fdbf46;
            font-size: 15px;
          }
          .couponhide {
            float: left;
            font-size: 15px;
          }
          .coupon {
            float: left;
            width: 21px;
            height: 14px;
            font-size: 12px;
            font-weight: 500;
            color: rgba(252, 59, 114, 1);
            text-align: center;
            background: rgba(252, 59, 114, 0.09849999999999999);
            border-radius: 3px;
            font-size: 0.2rem;
            font-family: PingFangSC-Medium;
            font-weight: 500;
            color: rgba(252, 59, 114, 1);
            padding: 1px 5px;
            letter-spacing: 1px;
            margin-top: 3px;
          }
          .operationBtn {
            float: right;
            width: 100px;
            margin-right: 18px;
            .sub {
              display: inline-block;
              width: 24px;
              height: 24px;
              line-height: 24px;
              font-size: 24px;
              background: rgba(246, 247, 248, 0.7977);
              border-radius: 4px 0px 0px 4px;
              color: rgba(23, 43, 77, 0.2);
              text-align: center;
              margin-right: 5px;
            }
            .numtext {
              display: inline-block;
              width: 24px;
              height: 24px;
              line-height: 24px;
              font-size: 24px;
              background: rgba(246, 247, 248, 0.7977);
              border-radius: 4px 0px 0px 4px;
              color: rgba(23, 43, 77, 0.2);
              text-align: center;
              margin-right: 5px;
            }
            .add {
              display: inline-block;
              width: 24px;
              height: 24px;
              line-height: 24px;
              font-size: 24px;
              background: rgba(246, 247, 248, 0.7977);
              border-radius: 4px 0px 0px 4px;
              color: rgba(23, 43, 77, 0.2);
              text-align: center;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
}
.footnav {
  position: fixed;
  bottom: 0px;
  height: 70px;
  width: 100%;
  background: #fff;
  padding: 8px;
  z-index: 400;
  .left {
    width: 45%;
    float: left;
    padding: 15px 6px;
    text-align: left;
    img {
      width: 16px;
      height: 16px;
    }
    span {
      color: #a5adba !important;
      font-size: 14px;
    }
  }
  .right {
    float: right;
    width: 180px;
    height: 40px;
    background: linear-gradient(
      90deg,
      rgba(252, 59, 114, 0.78) 0%,
      rgba(252, 59, 114, 1) 100%
    );
    border-radius: 20px;
    font-size: 16px;
    line-height: 40px;
    color: white;
    text-align: center;
    margin-top: 8px;
  }
}
</style>

