<template>
  <div id="lists">
    
    <div class="listheader1">
      <div>
        <span>
          <i class="el-icon-arrow-left" @click="goback()"></i>
        </span>
        <span>商品列表</span>
      </div>
    </div>
    <div class="listheader2">
      <ul class="listscreen">
        <li class="topcolor">综合</li>
        <li>
          <span>价格</span>
          <span>
            <i class="el-icon-caret-top"></i>
            <i class="el-icon-caret-bottom"></i>
          </span>
        </li>
        <li>
          <span>销量</span>
        </li>
        <li>
          <span>筛选</span>
        </li>
      </ul>
    </div>
    <div class="lisygoods">
      <!-- <vue-infinity-scroll
      :hasNextPage="true"
      visAllScreen="80vh"
      @scrolling="scrolling" 
    > -->
    <ul v-infinite-scroll="" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <i class="el-icon-loading" v-if="loading"></i>
        <li v-for="(a,index) in showData" :key="index">
          <div class="left">
            <img :src="a.img" alt="">
          </div>
          <div class="right">
            <p class="deric" v-text="a.texts"></p>
            <p class="other">
              <span v-text="a.price">
              </span>
              
              <span style="float:right;padding-right:10px;color:#aaa">
                销量
                <i v-text="a.salenum"></i>
              </span>
            </p>
          </div>
        </li>
         <i class="el-icon-loading" v-if="bLoading"></i>
      <div class="noWay" v-if="noshowmore">已到底啦</div>
      </ul>
    
    <!-- </vue-infinity-scroll> -->
      <!-- <ul>
        <li v-for="(a,index) in showData" :key="index">
          <div class="left">
            <img :src="a.img" alt="">
          </div>
          <div class="right">
            <p class="deric" v-text="a.texts"></p>
            <p class="other">
              <span v-text="a.price">
              </span>
              
              <span style="float:right;padding-right:10px;color:#aaa">
                销量
                <i v-text="a.salenum"></i>
              </span>
            </p>
          </div>
        </li>
      </ul> -->
      <!-- <i class="el-icon-loading" v-if="bLoading"></i>
      <div class="noWay" v-if="noshowmore">已到底啦</div> -->
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import request from "../lib/request";
import VueInfinityScroll from "vue-infinity-scroll";
import infiniteScroll from "vue-infinite-scroll";
Vue.use(infiniteScroll);
export default {
  data() {
    return {
      showData: [],
      allData: [],
      loading: false,
      bLoading: false,
      noshowmore: false,
      number: 10
    };
  },
  created() {
    this.getShopList();
    this.$store.state.isShowMfooter = false;
    this.$store.state.isShowdushi = false;
  },
  mounted() {
    window.addEventListener("scroll", this.bottomloading);
  },
  methods: {
    async getShopList() {
      const { g, p } = request;
      const data = await g({
        url:
          "https://www.easy-mock.com/mock/5cff63c7daa05f1d4b21f571/example_copy/keshilist"
      });
      this.allData = [...this.allData, ...data.data.alldata];
      this.showData = this.allData.slice(0, 10);
    },

    bottomloading() {
      if (window.scrollY > 497) {
      //  if (this.showData.length != this.allData.length) {
      this.bLoading = true;
      //  var number =15;
      // setTimeout(
      //   function() {
      //     this.bLoading = false;
      //     this.showData = this.allData.slice(0, this.number);
      //     this.number += 5;
      //   }.bind(this),
      //   3000
      // );
      // console.log(this.number);
      //  }
      // let that = this
      //   var timeOut = 10;
      // new Promise(function(resolve, reject) {
      //   // log("start new Promise...");
      //   // log("set timeout to: " + timeOut + " seconds.");
      //   setInterval(function() {
      //     timeOut += 5;
      //   that.showData = that.allData.slice(0, timeOut);
      //   that.bLoading = false;
      //   console.log(timeOut)
      //   },3000);
      // }).then(function(timeOut) {
      //   })
      //   .catch(function(reason) {
      //     log("Failed: " + reason);
      //   });
      let that = this
      new Promise(function(resolve, reject) {
        // log("start new Promise...");
        let timeOut = 5;
        // log("set timeout to: " + timeOut + " seconds.");
        setInterval(function() {

            timeOut += 5;
          console.log(timeOut)
            that.showData = that.allData.slice(0, timeOut);
            that.bLoading = false;

          // if (timeOut < 1) {
            //   log("call resolve()...");
          //   resolve("200 OK");
          // } else {
            //   log("call reject()...");
          //   reject("timeout in " + timeOut + " seconds.");
          // }
        }, 3000);
      })
        .then(function(timeOut) {
          // log("Done: " + r);
        })
        .catch(function(reason) {
          // log("Failed: " + reason);
        });
    }
    }

    // scrolling() {
    //   // this.offset = this.offset + 1
    //  this.bLoading = true;
    //   console.log(22)
    //   setTimeout(
    //     function() {
    //       this.number += 5;
    //       this.bLoading = false;
    //       this.showData = this.allData.slice(0, this.number);
    //       console.log(this.number)
    //       // console.log(this.number, window.scrollY);
    //     }.bind(this),
    //     3000
    //   );

    // }
    // bottomloading() {
    //   if (this.showData.length != this.allData.length) {
    //     this.number += 5;
    //     if (window.scrollY > 497) {
    //       this.bLoading = true;
    //       let promise = new Promise(resolve => {
    //         setTimeout(
    //           function() {
    //             this.bLoading = false;
    //             // let data = this.allData.slice(0, this.number);

    //             // console.log(this.number, window.scrollY);
    //             resolve("data");
    //           }.bind(this),
    //           3000
    //         );
    //       });
    //       promise.then(data => {
    //         // this.showData = data;
    //         console.log(data)
    //       });

    //       // setTimeout(
    //       //   function() {
    //       //     this.bLoading = false;
    //       //     this.showData = this.allData.slice(0, this.number);
    //       //     console.log(this.number, window.scrollY);
    //       //   }.bind(this),
    //       //   3000
    //       // );
    //     }
    //   } else {
    //     this.noshowmore = true;
    //     this.bLoading = false;
    //   }
    // }
  }
  // components: {
  //   VueInfinityScroll
  // }
};
</script>
<style scoped>
body {
  background: #f9faff;
}
.topcolor {
  color: #fc3b72;
}
.listheader1 {
  width: 100%;
  height: 66px;
  padding: 20px 0;
  position: fixed;
  top: 0;
  font-size: 18px;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: white;
}
.listheader1 i {
  font-size: 16px;
  font-weight: 600;
  position: absolute;
  left: 10px;
}
.listheader2 {
  position: fixed;
  top: 66px;
  left: 0;
  right: 0;
  background: #fff;
  font-size: 18px;
}
.listheader2 ul {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
}
.listheader2 .listscreen li {
  flex: 2;
  text-align: center;
  padding: 10px 0;
}
.el-icon-caret-top,
.el-icon-caret-bottom {
  font-size: 18px;
  color: #a5adba;
  position: absolute;
}
.el-icon-caret-top {
  top: 8px;
}
.el-icon-caret-bottom {
  top: 22px;
}
.lisygoods {
  margin-top: 116px;
  /* margin-bottom: 71px; */
}
.lisygoods ul li {
  width: 98%;
  height: 100px;
  border-bottom: 1px solid #eee;
  margin-bottom: 5px;
  box-shadow: 0px 6px 20px 0px rgba(120, 145, 212, 0.2);
}
.lisygoods ul li .left {
  float: left;
  width: 30%;
  height: 100px;
}
.lisygoods ul li .left img {
  width: 100%;
  height: 100%;
}
.lisygoods ul li .right {
  float: right;
  width: 68%;
  height: 100%;
}
.deric {
  height: 54px;
  font-size: 14px;
  line-height: 18px;
  padding: 10px;
  text-align: left;
}
.other {
  text-align: left;
  color: #fc3b72;
  font-size: 14px;
}
.el-icon-loading {
  display: block;
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 30px;
}
.noWay {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
</style>

