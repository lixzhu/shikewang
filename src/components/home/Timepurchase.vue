<template>
    <div class="time_box">
        <div class="time_title">
            限时优惠
            <i class="iconfont icon-naozhong"></i>
            <div class="right">
                <span class="over">距离本场结束 :&nbsp;&nbsp; </span>
                <span class="time" v-text="hour"></span> 
                <span class="hao">:</span>
                <span class="time"  v-text="min"></span>
                <span class="hao">:</span>
                <span class="time"  v-text="sec"></span>
                <span class="hao"></span>
            </div>
        </div>
        <div>
            <div class="time_content">
            <ul>
                <li v-for="(a,index) in allData" :key="index" @click="gotDetail(index)">
                    <div class="inbox">
                        <div>
                            <img :src="a.imgs" alt="">
                        </div>
                        <p v-text="a.price">
                        </p>
                        <span v-text="a.disc"></span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="time_total">
            <p>
                <i></i>
                8件商品&nbsp;&nbsp;&nbsp;&nbsp;
                <span>正在抢购</span>
            </p>
            <i></i>
        </div>
    </div>
</div>
</template>
<script>
import request from "../../lib/request";
export default {
 data() {
    return {
      allData: [],
      hour : '',
      min : '',
      sec : '',
    }
  },
 created() {
    this.getShopList();
  },
  mounted() {
    this.countdown()
  },
  methods: {
    async getShopList() {
      const { g, p } = request;
      const data = await g({
        url:"https://www.easy-mock.com/mock/5cff63c7daa05f1d4b21f571/example_copy/shikehotsale"
      })
      this.allData = [...this.allData, ...data.data.alldata];
    },

    //倒计时
    gotDetail(num){
      this.$router.push({path: '/detail/', query:{id:num}})
    },
    countdown: function () {
      const end = Date.parse(new Date('2019-12-01'))
      const now = Date.parse(new Date())
      const msec = end - now
      let day = parseInt(msec / 1000 / 60 / 60 / 24)
      let hour = parseInt(msec / 1000 / 60 / 60 % 24)
      let min = parseInt(msec / 1000 / 60 % 60)
      let sec = parseInt(msec / 1000 % 60)
      this.hour = hour > 9 ? hour : '0' + hour
      this.min = min > 9 ? min : '0' + min
      this.sec = sec > 9 ? sec : '0' + sec
      const that = this
      setTimeout(function () {
        that.countdown()
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.time_box {
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(121, 152, 215, 0.3);
  border-radius: 6px;
  margin: 12px 8px;
  overflow: hidden;
}
.time_title {
  width: 100%;
  height: 38px;
  background: rgba(255, 185, 204, 0.32);
  padding: 8px;
  font-size: 12px;
  font-weight: 900;
  color: #fc3b72;
  margin-right: 8px;
  text-align: left;
  vertical-align: middle;
  .right {
      float: right;
      .hao {
        float: left;
        width: 10px;
        height: 20px;
        line-height: 20px;
      }
      .over {
        float: left;
        color:  #fc3b72;
        font-size: 10px;
        font-weight: 700;
        margin-top: 5px;
      }
      .time {
        float: left;
        width: 24px;
        height: 20px;
        background: #fff;
        border-radius: 5px;
        line-height: 20px;
        font-weight: 600;
        color: rgba(255, 92, 96, 1);;
        font-size: 14px;
        text-align: center;
      }
    }
  i {
    float: left;
    width: 12px;
    height: 12px;
    font-size: 12px;
    margin-top: 4px;
    margin-right: 3px;
  }
}
.time_content {
  width: 100%;
  height: 141px;
  overflow: auto;
  padding-top: 4px;
  ul {
    padding: 4px 0 0;
    position: relative;
    height: 137px;
    width: 620px;
    li {
      float: left;
      width: 93px;
      float: left;
      margin: 0 5px 6px;
      border: 1px solid RGBA(23, 43, 77, 0.1);
      border-radius: 6px;
      text-align: center;
      padding: 8px 8px;
      position: relative;
      .inbox {
        position: relative;
        float: left;
        border-radius: 6px;
        text-align: center;
        position: relative;
        img {
          width: 100%;
        }
        p {
          text-align: left;
          font-size: 14px;
          color: #ff516c;
          margin-top: 8px;
         
        }
         span {
            position: absolute;
            background: #ff516c;
            border-radius: 6px 0px 0px 6px;
            color: #fff;
            font-size: 10px;
            padding: 0 4px;
            right: -9px;
            bottom: 5px;
          }
      }
    }
  }
}

.time_total {
  height: 36px;
  padding: 8px;
  p {
    i {
      float: left;
      width: 11px;
      height: 11px;
      margin-top: 3px;
    }
    text-align: left;
    color: #5e6c84 !important;
    font-size: 12px;
    span {
      color: #a5adba !important;
      font-size: 12px;
    }
  }
  i {
    float: right;
    width: 11px;
    height: 11px;
    margin-top: 5px;
  }
}
</style>
