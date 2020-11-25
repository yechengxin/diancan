import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  cartList: [],
	  num: 1,
  },
  mutations: {
	  addCounter(state, payload) {
	      payload.count++
	  },
	  cutCounter(state, payload) {
	      payload.count--
	  },
	  //添加数据
	  addToCart(state, payload) {
	      state.cartList.push(payload)
	  },  
	  addNum(state){
		  state.num++
	  },
	  cutNum(state){
		  state.num--
	  }
  },
  actions: {
	  addCart(context, payload) {
	      //使用promise让外界知道addcart操作成功
	      return new Promise((resolve, reject) => {
	          // 1.查看该商品是否已经添加到cartList中
	          const oldProdect = context.state.cartList.find(item => item.name === payload.name)
	          // 2.如果oldInfo存在, 那么原来的数量加1
	          if (oldProdect) {
	              context.commit('addCounter', oldProdect)
	              resolve('购物车中该商品数量+1')
	          } else {
				  Vue.set(payload,'count','1')
	              context.commit('addToCart', payload)
	              resolve('该商品已添加进购物车')
	          }
	      })
	  },
	  addCount(context,payload) {
	      const oldProdect = context.state.cartList.find(item => item.name === payload.name)
	      context.commit('addCounter', oldProdect)
	  },
	  cutCount(context,payload) {
	      const oldProdect = context.state.cartList.find(item => item.name === payload.name)
	      context.commit('cutCounter', oldProdect)
	  },
	  delGoods(context,payload) {	
		return new Promise((resolve, reject) => {
		    let index = (context.state.cartList || []).findIndex(item => item.name === payload.name);
			context.state.cartList.splice(index, 1)
			resolve('删除成功')
		})
	  },
  },
  modules: {
  },
  getters: {
	  cartList(state) {
	      return state.cartList
	  },
	  
	  getNum(state){
		  return state.num
	  }
  }
})
