<template>
	<div id="app">
		<keep-alive>
			<router-view />
		</keep-alive>
		
		<van-tabbar class='tabbar' v-model="active" @change="onChange">
			<van-tabbar-item>
				<van-icon name="shop-o" size="22px" class='tabitem_icon' />
				菜单
			</van-tabbar-item>
			<van-tabbar-item>
				<van-icon name="shopping-cart-o" size="22px" class='tabitem_icon' />
				付款
			</van-tabbar-item>
		</van-tabbar>
	</div>
</template>
<script>

	import {
		Tabbar,
		TabbarItem,
		Icon,
	} from 'vant'
	export default {
		data() {
			return {
				active: 0,
			}
		},
		methods: {
			onChange(event) {
				// event.detail 的值为当前选中项的索引
				if (event == 0) {
					this.$router.push('/home')
				}
				if (event == 1) {
					this.$router.push('/cart')
				}
			},
		},
		components: {
			[Tabbar.name]: Tabbar,
			[TabbarItem.name]: TabbarItem,
			[Icon.name]: Icon,
		},
	}
</script>
<style scoped>
	.tabitem_icon {
		display: block;
		margin: 0.25rem 0;
	}
	.tabbar{
		height: 9vh;
		background-color:	#F5F5F5
	}
</style>
<style>
	@import "assets/css/base.css";
</style>
