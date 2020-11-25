<template>
	<div>
		<scroll class="scroll" :probe-type="3" :pull-up-load="true" ref="scroll" @scroll="mainScroll" @pullingUp="mainDown">
			<div v-for="(item,index) in cartList" class="food">
				<img class="img" :src="item.imgurl" alt="">
				<div class="food_right">
					<div class="name">{{item.name}}</div>
					<div class="erheyi"><span class="num">月销{{item.num}}</span><span class="price">单价{{item.price}}元</span></div>
					<div class="count"><button @click="subBtn(item)">-</button><span>{{item.count}}</span><button @click="addBtn(item)">+</button><button
						 @click="delBtn(item)">×</button></div>
				</div>
			</div>
		</scroll>
		<div class="caozuo">
			<span class="zongjia">总价</span>
			<span class="money">{{this.getPrices}}</span>
			<span class="zhuohao">请输入桌号</span>
			<input v-model="message" type="number" name="quantity" min="1" max="5">
			<button @click="payMoney">付款</button>
			<van-popup round position='bottom' v-model="show">
				<div class="zhifutitle">请选择支付方式</div>
				<van-radio-group v-model="radio">
				  <van-cell-group>
				    <van-cell title="支付宝支付" clickable @click="radio = '1'">
				      <template #right-icon>
				        <van-radio name="1" />
				      </template>
				    </van-cell>
				    <van-cell title="微信支付" clickable @click="radio = '2'">
				      <template #right-icon>
				        <van-radio name="2" />
				      </template>
				    </van-cell>
					<van-cell class='zhifucell'>
						<template #title>
							<van-button class='zhifubtn' round type="primary" @click='zhifuBtn'>确认支付</van-button>
						</template>  
					</van-cell>
				  </van-cell-group>
				  
				</van-radio-group>
				
			</van-popup>
		</div>
	</div>
</template>

<script>
	import Scroll from "../../../components/common/scroll/Scroll";
	import {
		Popup,RadioGroup,Radio,Cell,CellGroup,Button
	} from 'vant'
	import {
		mapGetters
	} from 'vuex' //为了使getters中的函数转成计算属性
	export default {
		name: 'Cartitem',
		data() {
			return {
				message:'',
				show: false,
				radio:0,
			}
		},
		methods: {
			mainScroll(position) {
				//console.log(position)
			},
			mainDown() {
				this.$refs.scroll.finishPullUp();
			},
			subBtn(item) {
				if (item.count === 1) {
					this.$toastMessage({
						message: "当前数量为1，不可再减少",
						time: 1000
					})
				} else {
					this.$store.dispatch('cutCount', item)
				}
			},
			addBtn(item) {
				this.$store.dispatch('addCount', item)
			},
			delBtn(item) {
				this.$store.dispatch('delGoods', item).then(res=>{
					this.$refs.scroll.refresh()
				})		
			},
			payMoney(){
				if(this.getPrices == 0){
					this.$toastMessage({message: '请先点餐', time: 500})
				}else if(this.message == ''){
					this.$toastMessage({message: '请输入桌号', time: 500})
				}else{
					this.show = true;
					//this.$toastMessage({message: '付款成功', time: 500})
					
				}
			},
			zhifuBtn(){
				if(this.radio==0){
					this.$toastMessage({message: '请选择支付方式', time: 500})
				}else if(this.radio==1){
					this.$toastMessage({message: '支付宝支付成功', time: 1000})
					this.show = false
				}else if(this.radio==2){
					this.$toastMessage({message: '微信支付成功', time: 1000})
					this.show = false
				}
			}
		},
		components: {
			Scroll,
			[Popup.name]: Popup,
			[RadioGroup.name]: RadioGroup,
			[Radio.name]: Radio,
			[Cell.name]: Cell,
			[CellGroup.name]: CellGroup,
			[Button.name]: Button,
		},
		mounted() {},
		created() {},
		activated() {
			this.$refs.scroll.refresh()
		},
		computed: {
			...mapGetters(['cartList']),
			getPrices() {
				if (this.cartList.length == 0) {
					return 0
				} else {
					const cartList = this.cartList
					let a = cartList.length
					let b = 0
					for(let i=0;i<a;i++){
						b = b+cartList[i].count*cartList[i].price
					}
					return b.toFixed(2)
				}
			}
		}
	}
</script>

<style scoped>
	.scroll {
		position: absolute;
		height: 73vh;
		width: 100vw;
		background-color: #DCDCDC;
	}

	.img {
		height: 15vh;
		width: 30vw;
		border-radius: 10px;
	}

	.food {
		height: 16vh;
		display: flex;
		margin: 2vh 1vw;
		align-items: center;
		justify-content: center;
		background-color: white;
		border-radius: 10px;
	}

	.food_right {
		text-align: right;
		width: 40vw;
	}

	.erheyi {
		font-size: 10px;
	}

	.num {
		margin-right: 10px;
		font-size: 12px;
		color: #999999;
	}
	.price{
		font-size: 12px;
		color: #fe5337;
	}
	.name {
		margin: 5px 0;
		font-weight: 900;
	}
	.count span{
		text-align: center;
		width: 8vw;
		display: inline-block;
	}

	.count button {
		width: 6vw;
		height: 6vw;
		text-align: center;
		background-color: #00b8fe;
		border-radius: 20px;
		margin: 0 5px;
		color: white;
	}

	.count button:active {
		background-color: #00ff00;
	}

	.caozuo {
		position: absolute;
		bottom: 9vh;
		height: 9vh;
		line-height: 9vh;
		align-items: center;
		width: 100%;
	}
	.zongjia{
		font-size: 20px;
		font-weight: 900;
		margin-left: 3vw;
	}
	.money{
		color: red;
		margin: 0 1vw;
		display: inline-block;
		width: 20vw;
		text-align: center;
	}
	.caozuo input{
		line-height: initial;
		border: 1px solid #000000;
		border-radius: 10px;
		text-align: center;
	}
	.zhuohao{
		font-size: 10px;
		font-weight: 600;
		margin: 0 2vw;
	}
	.caozuo > button{
		background-color: #00b8fe;
		border-radius: 20px;
		width: 15vw;
		height: 5vh;
		line-height: 0;
		position: absolute;
		bottom: 1.5vh;
		right: 3vw;
		font-size: 14px;
		color: white;
	}
	.caozuo > button:active{
		background-color: #00ff00;
	}
	

	.zhifubtn{
		width: 100%;
		height: 5vh;
	}
	.zhifucell{
		text-align: center;
	}
	.zhifutitle{
		color: #1989fa;
		font-size: 18px;
		padding-left: 1vw;
	}
</style>
