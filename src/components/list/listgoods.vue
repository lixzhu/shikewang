<template>
  <ul id="listbox">
    <li v-for="item in itemdata" :key="item.itemid" @click="gogoods(item.itemid)">
      <img :src="item.image" alt>
      <p class="title">{{item.itemname}}</p>
      <p class="price">
        <span>
          ￥{{item.price.max}}&nbsp;&nbsp;&nbsp;&nbsp;
          <del>￥{{item.price.market}}</del>
        </span>
        <i>{{(item.price.max/item.price.market*10).toFixed(1)}}折</i>
      </p>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      itemdata: []
    };
  },
  // created() {
  //   // console.log(this.$axios);
  //   this.$axios({
  //     url: "http://localhost:3000/users/goods",
  //     method: "get"
  //   }).then(data => {
  //     // console.log(data.data);
  //     this.itemdata = data.data;
  //   });
  // },
  // methods: {
  //   gogoods(id) {
  //     this.$router.push({ path: "/goods", query: { id } });
  //   //   console.log(id)
  //   }
  // }
};
</script>
<style scoped>
#listbox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 180px;
}
#listbox li {
  width: 47%;
  background: #fff;
  box-sizing: border-box;
  padding: 24px 16px;
  margin: 20px 8px;
  margin-top: 0px;
}
#listbox li p {
  margin: 6px;
  /* height:64px; */
}
#listbox li p span {
  color: crimson;
}
#listbox li p del {
  color: #999;
}
.price {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.price i {
  background: rgba(254, 209, 123, 1);
  border-radius: 12px 0px 0px 12px;
  color: #fff;
  font-size: 0.24rem;
  padding: 0 8px;
}
</style>
