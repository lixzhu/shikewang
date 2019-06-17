<template>
    <div class="home_classed">
        <ul>
            <li>
                <a href="">
                    <img src="../../img/home-list1.png" alt="">
                    <p>海淘视客</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="../../img/home-list2.png" alt="">
                    <p>隐形眼镜</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="../../img/home-list3.png" alt="">
                    <p>美瞳</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="../../img/home-list4.png" alt="">
                    <p>护理用品</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="../../img/home-list5.png" alt="">
                    <p>我要领券</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="../../img/home-list6.png" alt="">
                    <p>邀请有奖</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="../../img/home-list7.png" alt="">
                    <p>在线客服</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="../../img/home-list8.png" alt="">
                    <p>活动提醒</p>
                </a>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
.home_classed {
  width: 100%;
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
      flex: 0 1 25%;
      padding: 14px 2%;
      a {
        width: 100%;
        text-align: center;
        img {
          width: 60%;
          height: 60%;
        }
        p {
          font-size: 12px;
          color: #a5adba !important;
        }
      }
    }
  }
}
</style>
