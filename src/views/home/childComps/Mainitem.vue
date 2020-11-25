<template>
	<div id="Mainitem">
		<div v-for="(item,a) in foods" :key='a'>
			<div class="title">{{item.title}}</div>
			<div class="food" v-for="(food,b) in item.food" :key='b' @click="itemClick(food,$event)" @touchstart='touchstart($event)' @touchend="touchend($event)">
				<img class="img" :src="food.imgurl" alt="">
				<div class="food_right">
					<div class="name">{{food.name}}</div>
					<div class="num">月销{{food.num}}</div>
					<div class="price">{{food.price}}元</div>
					<button class="addbtn" @click="addBtn(food,$event)">+</button>
				</div>
			</div>
		</div>
	</div>	
</template>

<script>
	export default {
		name: 'Mainitem',
		data() {
			return {}
		},
		methods: {
			addBtn(food,event) {
				this.$store.dispatch('addCart',food).then(res=>{
					this.$toastMessage({message: res, time: 500})
					event.stopPropagation()
				})
			},
			itemClick(item,event){
				event.currentTarget.style.backgroundColor = 'white';
				this.$router.push('/category/'+item.name)
			},
			touchstart(event){
				event.currentTarget.style.backgroundColor = '#e0e0e0';				
			},
			touchend(event){			
				event.currentTarget.style.backgroundColor = 'white';
			},
			
		},
		components: {},
		mounted() {},
		created() {
		},
		props: {
			foods: Array,
		}
	}
</script>

<style scoped>
	.food {
		height: 16vh;
		display: flex;
		padding: 2vh 1vw;
		align-items: center;
		justify-content: center;
		background-color: white;
	}
	.food:active{
		background-color: #e0e0e0;
	}
	.img {
		height: 15vh;
		width: 30vw;
		border-radius: 10px;
	}
	.food_right {
		text-align: right;
		width: 30vw;
	}

	.name {
		margin-bottom: 1px;
		font-size: 16px;
		font-weight: 900;
	}

	.num {
		font-size: 10px;
		margin-bottom: 1px;
		color: #999999;
	}

	.price {
		font-size: 12px;
		margin-bottom: 1px;
		color: #fe5337;
	}

	.addbtn {
		width: 8vw;
		background-color: #00b8fe;
		border-radius: 20px;
		color: white;
		height: 4vh;
	}

	.addbtn:active {
		background-color: #00ff00;
	}
	.title{
		padding-left: 5vw;
		background-color: white;
		height: 5vh;	
		line-height: 5vh;
		font-weight: 600;
		overflow: hidden;
		white-space: nowrap;
		text-overflow:ellipsis;
	}
</style>
