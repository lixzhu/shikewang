<template>
  <div class="home">
      <div class="home_sou" id="homeTop">
        <i class="iconfont icon-sousuo"></i>
        <input id="homeInput" class="home_input" type="text" placeholder="搜索/商品/品牌/类别">
      </div>
      <Swiper/>
      <Classed/>
      <Timepurchase/>
      <Hotsale/>
      <Invisible/>
      <Nursing/>
      <div id="totop">
        <i class="el-icon-arrow-up"  @click="goTo()" ></i>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Swiper from "../components/home/Swiper.vue";
import Classed from "../components/home/Classed.vue";
import Timepurchase from "../components/home/Timepurchase.vue";
import Hotsale from "../components/home/Hotsale.vue";
import Invisible from "../components/home/Invisible.vue";
import Nursing from "../components/home/Nursing.vue";
export default Vue.extend({
  components: {
    Swiper,
    Classed,
    Timepurchase,
    Hotsale,
    Invisible,
    Nursing,
  },
  created(){
    this.$store.state.isShowMfooter = true;
    this.$store.state.isShowdushi = false;
  },
  mounted(){
    window.addEventListener("scroll",this.handleFun);
    window.addEventListener("scroll",this.toTop);
  },
  methods: {
     handleFun(){
      let t = document.documentElement.scrollTop || document.body.scrollTop;
        let homeTop = document.getElementById("homeTop");
        let homeInput = document.getElementById("homeInput");
        if( t >= 88 ) {
          homeTop.style.backgroundColor = '#ff516c';
          homeInput.style.backgroundColor = '#fff';
          homeInput.style.color = '#ccc';
        } else{
          homeTop.style.background = 'transparent';
          homeInput.style.background = 'RGBA(255, 255, 255, 0.6)';
          homeInput.style.color = '#a5adba';
        }
    },
    toTop(){
      let t = document.documentElement.scrollTop || document.body.scrollTop;
        let toTop = document.getElementById("totop");
        if( t >= 144 ) {
          toTop.style.display = 'block'
        } else{
          toTop.style.display = 'none'
        }
    },
    goTo(){
      document.documentElement.scrollTop = 0
    }
  },
  beforeDestroy(){
    window.removeEventListener("scroll",this.handleFun);
    window.removeEventListener("scroll",this.toTop);
  },
});
</script>

<style lang="scss" scoped>
.home {
  margin-bottom: 80px;
}
.home_sou {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 60px;
  padding: 12px;
  background: rgb(252, 59, 114) 100%;
  background: transparent;
  z-index:99;
  .home_input {
    width: 100%;
    height: 36px;
    color: #a5adba;
    background: RGBA(255, 255, 255, 0.6);
    padding: 8px;
    padding-left: 25px;
    font-size: 14px;
    text-align: left;
  }
  i {
    position: absolute;
    left: 18px;
    top: 21px;
    display: block;
    width: 17px;
    height: 17px;
  }
}
#totop{
  position:fixed;
  right:20px;
  bottom:100px;
  width:40px;
  height:40px;
  background: rgba(1,2,3,0.3);
  border-radius: 20px;
  display: none;
  i{
    display:block;
    width: 40px;
    height:40px;
    font-size:30px;
    line-height: 40px;
    text-align: center;
    color:#fff;
  }
}
</style>

