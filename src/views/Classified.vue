<template>
    <div id="classified">
        <div class="Categorytop fl-row-left">
            <i class="iconfont icon-sousuo"></i>
            <input type="text" placeholder="搜索/商品/品牌/类别" value="">
        </div>
        <div class="TabsTop" style="top:56px">
            <ul class="fl-row-around">
                <router-link to="/classified/colour">
                    <li @click="change(0)" :class="state == 0 ? 'actvity' : ''">隐形眼镜</li>
                </router-link>
                <router-link to="/classified/nursingcare">
                    <li @click="change(1)" :class="state == 1 ? 'actvity' : ''">彩色隐形眼镜</li>
                </router-link>
                <router-link to="/classified/transparent">
                    <li @click="change(2)" :class="state == 2 ? 'actvity' : ''">护理用品</li>
                </router-link>
            </ul>
        </div>
        <div class="TabsContent" id="TabsContent">
            <div class="CategoryList">
                <router-view></router-view>
            </div>
        </div>       
    </div>
</template>

<script>
export default {
  data(){
    return{
      index : 0,
      index1 : 1,
      index : 2,
      state : 0
    }
  },
  created(){
    this.$store.state.isShowMfooter = true;
    this.$store.state.isShowdushi = false;
  },
  methods: {
    change(index){
      this.state = index;
    }
  },
}
</script>
<style lang="scss" scoped>
  .TabsTop ul .actvity{
    color: #fc3b72;
  }
.Categorytop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  padding: 12px;
  height: 40px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 48px;
  z-index: 3;
  background: #fff;
  i {
    position: absolute;
    left: 16px;
    top: 44%;
    width: 16px;
    height: 16px;
    display: block;
    transform: translateY(-50%);
    font-size: 16px;
    font-style: normal;
    color:#242020;
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
.TabsTop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: #fff;
  font-family: "PingFangSC-Regular";
  color: #172b4d;
  ul {
    overflow: hidden;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    font-family: "PingFangSC-Regular";
    color: #172b4d;
    li {
      font-family: "PingFangSC-Regular";
      color: #172b4d;
      padding: 15px;
      margin: 0 10px;
      box-sizing: border-box;
      font-size: 14px;
    }
  }
}
.CategoryList {
  overflow: auto;
  margin-top: 100px;
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
        a{
            color:#172b4d;
        }
      }
    }
  }
}

</style>
