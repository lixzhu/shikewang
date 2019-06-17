<template>
    <div>
        <div class="Categoryitem">
            <!-- <section class="sec">
                <p>
                    <i class="t_red">.</i>
                    热销品牌
                </p>
                <ul class="fl-row-left">
                    <li class="item">
                        <a href="">库博</a>
                    </li>
                    <li class="item">
                        <a href="">美若康</a>
                    </li>
                    <li class="item">
                        <a href="">ilens</a>
                    </li>
                    <li>
                        <a href="">博士伦</a>
                    </li>
                    <li class="item">
                        <a href="">强生</a>
                    </li>
                    <li class="item">
                        <a href="">视康</a>
                    </li>
                    <li class="item">
                        <a href="">茵洛</a>
                    </li>
                    <li class="item">
                        <a href="">实瞳</a>
                    </li>
                    <li class="item">
                        <a href="">更多品牌</a>
                    </li>
                </ul> -->
            </section>
            <section class="sec">
                <p>
                    <i class="t_red">.</i>
                    人气系列
                </p>
                <ul>
                    <li v-for="(a,index) in one" :key="index">
                        <router-link class="router" to="/list">
                            <span v-text="a.text"></span>
                        </router-link>
                    </li>
                </ul>
            </section>
            <section class="sec">
                <p>
                    <i class="t_red">.</i>
                    抛弃周期    
                </p>
                <ul>
                    <li v-for="(a,index) in two" :key="index">
                        <router-link class="router" to="/list">
                            <span v-text="a.text"></span>
                        </router-link>
                    </li>
                </ul>
            </section>
            <section class="sec">
                <p>
                    <i class="t_red">.</i>
                    佩戴场合
                </p>
                <ul>
                    <li v-for="(a,index) in three" :key="index">
                        <router-link class="router" to="/list">
                            <span v-text="a.text"></span>
                        </router-link>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return{
            one : [
                {text :' ilens'},
                {text :' 美若康/沐氧'},
                {text :' 茵洛/Clalen'},
                {text :' 库博/佰视明'},
                {text :' 强生/舒日'},
                {text :' 视康/日夜型'},
                {text :' 库博/宝睛'},
            ],
            two : [
                {text :' 日抛'},
                {text :' 双周抛'},
                {text :' 月抛'},
                {text :' 半年抛'},
                {text :' 年抛'}
            ],
            three : [
                {text :' 外出游玩'},
                {text :' 商务职场'},
                {text :' 青春校园'},
                {text :' 逛街聚会'},
            ],
        }
    }
})
</script>
<style lang="scss" scoped>
    .Categoryitem {
    overflow: auto;
    padding-bottom: 60px;
  }
  .sec {
    padding: 0 12px;
    background: #fff;
    margin: 12px 0;
    box-shadow: 0px 4px 20px 0px rgba(121, 152, 215, 0.2);
    display: block;
    font-family: "PingFangSC-Regular";
    color: #172b4d;
    p {
      color: #a5adba;
      padding: 0 0 12px 0;
      font-size: 12px;
      text-align: left;
      i {
        vertical-align: 3px;
        font-size: 20px;
        margin-right: 4px;
        color: #fc3b72 !important;
      }
    }
    ul {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: flex-start;
      li {
        background: #f4f5f6;
        border-radius: 13px;
        padding: 5px 14px;
        font-size: 12px;
        margin-right: 12px;
        margin-bottom: 12px;
        span{
            color:#172b4d;
        }
      }
    }
  }
</style>
