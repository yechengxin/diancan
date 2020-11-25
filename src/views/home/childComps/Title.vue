<template>
	<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
		<van-swipe-item class='swipeitem' v-for='(item,index) in swiper' :key='index'>
			<img :src="item" />
		</van-swipe-item>
	</van-swipe>
</template>

<script>
	import {
		Swipe,
		SwipeItem
	} from 'vant'
	export default {
		name: 'Title',
		data() {
			return {
				swiper: [
					'https://tse3-mm.cn.bing.net/th/id/OIP.ZH8oXjZi98lboimizjD5IwHaEj?w=287&h=175&c=7&o=5&pid=1.7',
					'https://tse2-mm.cn.bing.net/th/id/OIP.Xhjc7kaZ_wvDGyaqmVjUvwHaE8?w=300&h=200&c=7&o=5&pid=1.7',
					'https://tse3-mm.cn.bing.net/th/id/OIP.7ssFlxFD8ylwxXlpXfyP1gHaE8?w=279&h=186&c=7&o=5&pid=1.7',
					'https://tse4-mm.cn.bing.net/th/id/OIP.ESXkzPngmEDkahUbC0-v0wHaEo?w=302&h=188&c=7&o=5&pid=1.7',
				]
			}
		},
		methods: {},
		components: {
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
		},
	}
</script>

<style scoped>
	.my-swipe .van-swipe-item {
		color: #fff;
		font-size: 20px;
		line-height: 150px;
		text-align: center;
		background-color: #fbfbfb;
	}
	.swipeitem img{
		/* width: 90vw;
		height: 19vh;
		margin-top: 1vh; */
		width: 100vw;
		height: 21vh;
	}
</style>
