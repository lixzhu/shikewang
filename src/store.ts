import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
//把本地存储用户名取出来
var arr = JSON.parse(localStorage.getItem('arr') || '[]')
var cart = JSON.parse(localStorage.getItem('cart') || '[]') //取出本地购物车商品
var useringname = JSON.parse(localStorage.getItem('useringname') || '[]')
var orderArr = JSON.parse(localStorage.getItem('orderArr') || '[]')
export default new Vuex.Store({
  state: {
    isShowdushi : false,
    isShowmack : false,
    isShowJionCart : false,
    isShowMfooter:true,//底部导航
    arr : arr,//用户名和密码
    bool : '',//判断是否能注册
    isLogin : '',
    logining : false,
    users : useringname,
    size : '',
    cart : cart, //购物车
    jionedCart : false, //是否成功加入购物车
    cartTotal : '',
    orderArr : orderArr, //订单
  },


  //向外提供参数的数据。类似过滤器和计算属性 
  getters:{
    //购物车总价
    cartTotal(state){
      var total = 0;
      state.cart.forEach(item => {
        total += item.many * item.price.slice(1);
      })
      return total
    }, 

    //修改镜片度数
    changeSize(state){
      return state.size;
    }
  },

  //仓库的管理员（只能修改仓库数据，不能向外提供数据）
  mutations: {
    //判断仓库是否有该用户(注册)
    checkUser(state, a){
      var flag = false
      state.arr.some(item =>{
        if(item.name == a.name){
          state.bool = false;
          flag = true;
          return true;

        }
      })
      //不存在
      if(flag === false){
        state.arr.push(a);
        state.bool = true;
        localStorage.setItem('arr',JSON.stringify(state.arr))
      }
    },

    //判断是否存在用户名（登陆）
    checkLoginuser(state,logininf){
      state.arr.some(item =>{
        if(item.name == logininf.name && item.password == logininf.password){
          state.logining = true;
          state.isLogin = true;
          state.users = logininf.name;
          state.pw = logininf.password;
          localStorage.setItem('useringname',JSON.stringify(state.users))
          return true
        }else{
          state.isLogin = false;
        }
      })
    },

    //加入购物车
    jionInTheCart(state,cartarr){
      //假设没有在购物车里没有找到商品
      var hasGoods = false;
      state.cart.some(item=>{
        if(item.gid == cartarr.gid && item.sizes === cartarr.sizes){
            item.many = parseInt(item.many) + 1
            hasGoods = true
            state.jionedCart = true
            localStorage.setItem('cart',JSON.stringify(state.cart))
            return true
          }        
        })
        
        if(hasGoods === false ){
          state.cart.push(cartarr)
          state.jionedCart = true
          console.log(state.cart)
          localStorage.setItem('cart',JSON.stringify(state.cart))
        }
    },

    //购物车商品数量减少
    reducenum(state,numobj){
      state.cart[numobj.numindex].many = numobj.num;
      localStorage.setItem('cart',JSON.stringify(state.cart))
    },

    //购物车商品数量增加
    addnum(state,numobj){
      state.cart[numobj.numindex].many = numobj.num;
      
      localStorage.setItem('cart',JSON.stringify(state.cart))
    },

    //删除商品
    removegoods(state,index){
      state.cart.splice(index,1);
      localStorage.setItem('cart',JSON.stringify(state.cart))
    },
    removeAllgoods(state){
      state.cart = [];
      localStorage.setItem('cart',JSON.stringify(state.cart))
    },

    //订单
    goodsOrder(state){
      state.orderArr = state.cart
      localStorage.setItem('orderArr',JSON.stringify(state.orderArr))
      state.cart = [];
      localStorage.setItem('cart',JSON.stringify(state.cart))
    },
  },


  actions: {

  },
});
