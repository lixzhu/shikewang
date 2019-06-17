<template>
    <div>
        <div class="hottitle">
            <span>护理用品</span>
            <span class="more">更多 ></span>
        </div>
        <div class="hot_content">
            <ul>
                <li v-for="(a,index) in allData" :key="index" @click="gotDetail(index)">
                   
                        <div class="imgbox">
                            <img :src="a.imgs" alt="">
                        </div>
                        <div class="gooddec">
                            <p v-text="a.texts"></p>
                        </div>
                        <div class="other">
                            <span class="price" v-text="a.price"></span>
                            <span class="oldclass" v-text="a.oldprice"></span>
                            <span class="discount" v-text="a.disc"></span>
                        </div>
                        <div class="empty"></div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import request from "../../lib/request";
export default {
 data() {
    return {
      allData: [],
    }
  },
 created() {
    this.getShopList();
  },
  methods: {
    async getShopList() {
      const { g, p } = request;
      const data = await g({
        url:"https://www.easy-mock.com/mock/5cff63c7daa05f1d4b21f571/example_copy/huli"
      })
      this.allData = [...this.allData, ...data.data.alldata];
    },
    gotDetail(num){
      let numid = num * 1 + 24
        this.$router.push({path: '/detail/', query:{id:numid}})
    }
  }
}
</script>
<style lang="scss" scoped>
.hottitle {
  height: 32px;
  padding: 0 12px 12px;
  text-align: left;
  color: #a5adba !important;
  font-size: 16px;
  .more{
      float: right;
      font-size: 12px;
  }
}
.hot_content {
  overflow: auto;
  ul {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    li {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      justify-content: center;
      flex: 0 1 45%;
      padding: 14px 2%;
      float: left;
      background: #fff;
      border-radius: 6px;
      margin: 0 4px 8px 4px;
      padding: 8px 12px 8px 12px;
      height: 256px;
      box-shadow: 0px 6px 20px 0px rgba(121, 152, 215, 0.2);
      .imgbox {
        width: 150px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .gooddec {
        font-size: 12px;
        height: 32px;
        line-height: 1.4;
        width: 100%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        margin: 3px 0;
        text-align: left;
      }
      .other {
          position: relative;
          width: 100%;
        text-align: left;
      }
      .price {
        float: left;
        color: #ff516c;
        font-size: 15px;
      }
      .oldclass {
        float: left;
        color: #a5adba;
        text-decoration: line-through;
        font-size: 13px;
        margin-left: 8px;
      }
      .discount {
        background: rgba(254, 209, 123, 1);
        border-radius: 6px 0px 0px 6px;
        color: #fff;
        font-size: 12px;
        padding: 0 4px;
        position: absolute;
        right: -0.24rem;
        top: 0;
      }
    }
  }
}
</style>

