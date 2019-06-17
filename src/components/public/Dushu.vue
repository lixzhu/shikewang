<template>
  <div>
      <div id="hotHow" v-if="isShowdushi">
          <p class="texts">强生安视优舒日隐形眼镜日抛30片装</p>    
          <span class="price">
              <i>￥</i>
              148
          </span>
          <h5>度数</h5>
          <ul>
              <li v-for="(a,index) in arr" :key="index"><span v-text="a.num.toFixed(2)" @click="hide(index)"></span></li>
          </ul>
      </div>
      <div class="mack" v-if="isShowmack" @click="mackClick()"></div>
      
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      arr: [
        { num: -1.0 },
        { num: -1.25 },
        { num: -1.5 },
        { num: -1.75 },
        { num: -2.0 },
        { num: -2.25 },
        { num: -2.5 },
        { num: -2.75 },
        { num: -3.0 },
        { num: -3.25 },
        { num: -3.5 },
        { num: -3.75 },
        { num: -4.0 },
        { num: -4.25 },
        { num: -4.5 },
        { num: -4.75 },
        { num: -5.0 },
        { num: -5.25 },
        { num: -5.5 },
        { num: -5.75 },
        { num: -6.0 },
        { num: -6.25 },
        { num: -6.5 },
        { num: -6.75 },
        { num: -7.0 },
        { num: -7.25 },
        { num: -7.5 },
        { num: -7.75 },
        { num: -8.0 },
        { num: -8.25 },
        { num: -8.5 },
        { num: -8.75 },
        { num: -9.0 }
      ]
    };
  },
  computed: {
    isShowdushi() {
      // 从仓库获取值到组件
      return this.$store.state.isShowdushi;
    },
    isShowmack() {
      return this.$store.state.isShowmack;
    },
  },
  methods: {
    hide(index) {
      this.$store.state.isShowmack = false;
      this.$store.state.isShowdushi = false;
      this.$store.state.size = this.arr[index].num;
      console.log(this.$store.state.size)
    },
    mackClick(){
      this.$store.state.isShowdushi = false;
      this.$store.state.isShowmack = false;
    }
    
  }
});
</script>

<style lang="scss" scoped>

.mack {
  width: 100%;
  height: 500px;
  position: fixed;
  top: 0px;
  z-index: 8;
  background: rgba(0, 0, 0, 0.5);
}
div#hotHow {
  position: fixed;
  bottom: 0;
  background: #fff;
  transition: all 1s;
  height: 533px;
  border-radius: 20px 20px 0 0;
  padding-top: 30px;
  z-index: 100;
}
.price {
  display: block;
  text-align: left;
  color: #fc3b72 !important;
  padding-left: 15px;
}
h5 {
  text-align: left;
  line-height: 40px;
  padding-left: 15px;
}
.texts {
  padding-left: 15px;
  line-height: 30px;
  color: #a5adba !important;
  font-size: 12px;
  text-align: left;
}
ul {
  display: block;
  height: 350px;
  li {
    float: left;
    width: 21%;
    margin: 0 6px 12px;
    font-size: 13px;
    color: rgba(23, 43, 77, 1);
    text-align: center;
    padding: 5px 0;
    border-radius: 12px;
    box-sizing: border-box;
    background: rgba(182, 189, 199, 0.12);
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
  }
}
</style>
