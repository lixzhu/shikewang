<template>
    <div>
        <main class="jsx-1841609413 PageContents">
            <div class="Categorytop fl-row-left">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" placeholder="搜索/商品/品牌/类别" value=""/>
            </div>
            <div class="jsx-2467580519 ordertype fl-row-center">
                <ul>
                    <li>全部</li>
                    <li style="color:#fc3b72">待收款</li>
                    <li>待发货</li>
                    <li>待收货</li>
                    <li>待评价</li>
                </ul>
            </div>
            <div class="contentList">
             <ul>
                 <li class="itemlist" v-for="(a,index) in goodlist" :key="index">
                     <a class="cartImage" href="#####">
                         <img :src="a.img">
                    </a>
                    <div>
                        <div class="cartTitle">
                            <a href="####" v-text="a.texts"></a>
                        </div>
                        <div class="skuChose">
                            <div class="skuText" style="padding-left:10px;" > 
                                <span v-text="a.sizes.toFixed(2)"></span>
                                <!-- <i class="el-icon-arrow-right" @click="select(index)"></i>   -->
                            </div>
                        </div>
                        <div class="priceAndOperation Gold">
                            <span class="price" v-text="a.price"> </span>
                            <span class="goldtext"></span>
                            <span class="couponhide"></span>
                        </div>
                    </div>
                </li>
            </ul>
         </div>
        </main>
    </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    data(){
      return{
        goodlist: this.$store.state.orderArr,
      }
    },
    created(){
        this.$store.state.isShowMfooter = true;
        this.$store.state.isShowdushi = false;
    },
})
</script>
<style lang="scss" scoped>
.PageContents {
  padding-bottom: 64px;
  .Categorytop {
    position: fixed;
    top: 0;
    background: white;
    padding: 12px;
    z-index: 99;
    width: 100%;
    i {
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      font-family: "iconfont" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
    }
    input {
      border: 1px solid #a5adba;
      padding: 8px;
      border-radius: 5px;
      text-indent: 1.3em;
      font-size: 12px;
      width: 100%;
      color: #172b4d;
    }
  }
  .ordertype {
    width: 100%;
    background: white;
    box-shadow: 0px 1px 1px #eae5e5;
    height: 28px;
    position: fixed;
    top: 50px;
    z-index: 99;
    ul {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: center;
      li {
        float: left;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-flow: column wrap;
        flex-flow: column wrap;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 13px;
      }
    }
  }
}
.contentList {
  display: auto;
  margin-top: 88px;
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
</style>

