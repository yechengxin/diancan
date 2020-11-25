<template>
	<div id="category">
		<div class="header">
			<van-icon class='goback' name="arrow-left" @click="goBack" />
		</div>
		<scroll class="scroll1" :probe-type="3" :pull-up-load="true" ref="aside_scroll" @scroll="asideScroll"
		 @pullingUp="asideDown">
			123
		</scroll>
	</div>
</template>

<script>
	import Scroll from "../../components/common/scroll/Scroll";
	import {
		Icon,
	} from 'vant'
	export default {
		name: 'Category',
		data() {
			return {
			}
		},
		methods: {
			asideScroll(position) {
				//console.log(position)
			},
			asideDown() {
				//console.log('asideDown')
				this.$refs.aside_scroll.finishPullUp();
			},
			goBack(){
				this.$router.back()
			}
		},
		components: {
			Scroll,
			[Icon.name]: Icon,
		},
		activated() {
		}
	}
</script>

<style scoped>
	#category{
		width: 100vw;
		height: 91vh;
	}
	.scroll1{
		width: 100vw;
		height: 86vh;
		background-color: white;
	}
	.header{
		width: 100vw;
		height: 5vh;
		background-color: #f7f8fa;
	}
	.goback{
		height: 5vh;
		line-height: 5vh;
		margin-left: 5vw;
	}
</style>
