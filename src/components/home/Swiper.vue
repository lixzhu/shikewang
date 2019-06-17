<template>
    <div class="home_banner">
        <div class="block">
            <el-carousel height="210px" indicator-position="none" arrow="never">
                <el-carousel-item v-for="(item,index) in imgs" :key="index">
                    <!-- <h3 class="small">{{ item }}</h3> -->
                    <img :src="item.imgurl" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
      return {
          imgs : [
                {
                    imgurl : require("../../img/home_banner1.jpg"),
                },
                {
                    imgurl : require("../../img/home_banner3.jpg"),
                },
                {
                    imgurl : require("../../img/home_banner4.jpg"),
                },
                {
                    imgurl : require("../../img/home_banner5.jpg"),
                },
            ],
          };
    },
})
</script>
<style lang="scss" scoped>
.home_banner{
    width: 100%;
    height: 210px;
    background: pink;
}
.el-carousel__item img {
    width:100%;
    height:100%;
  }

</style>
