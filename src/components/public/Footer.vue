<template>
  <div v-if="isShowMfooter" class="footer">
    <ul>
      <li v-for="(a,index) in footer" :key="index" :class="{'actvity' : actvityindex == index}"  @click="goto(index)">
        <!-- <router-link :to='a.url'> -->
          <i :class="a.iconfont" ></i>
          <p v-text="a.name"></p>
        <!-- </router-link> -->
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  width: 100%;
  position: fixed;
  height: 65px;
  bottom: 0;
  background: white;
}
.footer ul {
  display: flex;
  height: 100%;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
.footer ul li {
  display: flex;
  flex: 1;
  flex-flow: column wrap;
  align-items: center;
  font-size: 16px;
  color: #ccc;
}
.footer ul .actvity {
  color: #ff516c;
}
.footer ul li i {
  display: block;
  width: 24px;
  height: 24px;
  font-size: 24px;
}
.footer ul li p {
  font-size: 14px;
  font-family: "PingFangSC-Regular";
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      footer: [
        {
          iconfont: "iconfont icon-index",
          name: "首页",
          url: "home",
          select: ""
        },
        {
          iconfont: "iconfont icon-leimupinleifenleileibie1",
          name: "分类",
          url: "classified",
          select: ""
        },
        {
          iconfont: "iconfont icon-chat-gray",
          name: "购物车",
          url: "cart",
          select: ""
        },
        {
          iconfont: "iconfont icon-dingdan-blue",
          name: "订单",
          url: "order",
          select: ""
        },
        {
          iconfont: "iconfont icon-mine-gray",
          name: "我的",
          url: "my",
          select: ""
        }
      ],
      actvityindex: 0
    };
  },
  watch: {
    $route(to, from) {
      var routename = this.$route.matched[0].path.slice(1);
      let index = 0;
      this.footer.forEach((item, i) => {
        if (item.url === routename) {
          index = i;
        }
      });
      this.actvityindex = index;
    }
  },
  computed:{
    isShowMfooter(){
      // 从仓库获取值到组件
      return this.$store.state.isShowMfooter
    }
  },
  methods: {
    goto(index) {
      this.$router.push({
        name: this.footer[index].url
      });
      this.actvityindex = index;
    }
  }
});
</script>


