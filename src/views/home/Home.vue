<template>
	<div id="home" class="home">
		<div id="fixed"></div>
		<Title class='title' id='mySwipe'></Title>
		<el-container class="content">
			<el-aside class='left huanhang' width='30%'>
				<scroll class="scroll leftscroll" :probe-type="3" :pull-up-load="true" ref="aside_scroll" @scroll="asideScroll"
				 @pullingUp="asideDown">
					<Leftitem :title='foods' @leftClick='leftClick' :count='count'></Leftitem>
				</scroll>
			</el-aside>
			<el-main class='main huanhang'>
				<scroll id="mainscroll" class="scroll mainscroll" :probe-type="3" :pull-up-load="true" ref="main_scroll" @scroll="mainScroll"
				 @pullingUp="mainDown">
					<Mainitem :foods='foods'></Mainitem>
				</scroll>
			</el-main>
		</el-container>
	</div>
</template>

<script>
	import Title from './childComps/Title.vue'
	import Leftitem from './childComps/Leftitem.vue'
	import Mainitem from './childComps/Mainitem.vue'
	import Scroll from "../../components/common/scroll/Scroll";

	export default {
		name: 'Home',
		data() {
			return {
				count: 0,
				contentY:0,
				wrapperY:0,
				numY:[],
				foods: [{
					title: '家常菜',
					food: [{
						'imgurl': 'http://5b0988e595225.cdn.sohucs.com/images/20180909/6f394740d8fe4e2b871fa0ccba6541eb.png',
						'name': '鱼香肉丝',
						'num': '12',
						'price': '12',
					}, {
						'imgurl': 'https://tse2-mm.cn.bing.net/th/id/OIP.aKMIazD2xi97S6AovCk0SAHaHa?w=194&h=194&c=7&o=5&pid=1.7',
						'name': '红烧肉',
						'num': '12',
						'price': '20',
					}, {
						'imgurl': 'https://tse1-mm.cn.bing.net/th/id/OIP.hUCIIEAHmtspKUSkKmoS2wHaFT?w=232&h=175&c=7&o=5&pid=1.7',
						'name': '干煸四季豆',
						'num': '23',
						'price': '15',
					}, {
						'imgurl': 'https://tse3-mm.cn.bing.net/th/id/OIP.WePVdzQKCtbpPCuJrBYC8wHaIz?w=165&h=196&c=7&o=5&pid=1.7',
						'name': '糖醋白菜',
						'num': '23',
						'price': '10',
					}, {
						'imgurl': 'http://cp1.douguo.net/upload/caiku/2/6/b/yuan_26ac630fd521bff88e59cdc0c10ce5bb.jpeg',
						'name': '水煮肉片',
						'num': '23',
						'price': '25',
					}, {
						'imgurl': 'https://tse1-mm.cn.bing.net/th/id/OIP.eNPlCbP_EqJH9rcSdph_AgHaFr?w=240&h=183&c=7&o=5&pid=1.7',
						'name': '青椒肉丝',
						'num': '54',
						'price': '15',
					}, ]
				}, {
					title: '凉拌菜',
					food: [{
						'imgurl': 'https://tse4-mm.cn.bing.net/th/id/OIP.z0ThhgweMJuGP0cVBZheQAHaFj?w=263&h=197&c=7&o=5&pid=1.7',
						'name': '凉拌猪耳朵',
						'num': '23',
						'price': '20',
					}, {
						'imgurl': 'https://tse1-mm.cn.bing.net/th/id/OIP.qvbhFaYprjvQMjmob8LvxwHaE8?w=268&h=179&c=7&o=5&pid=1.7',
						'name': '凉拌黄瓜',
						'num': '42',
						'price': '11',
					}, {
						'imgurl': 'https://tse2-mm.cn.bing.net/th/id/OIP.DS-4QsXtfpeymcbfAR6KYQHaFj?w=257&h=193&c=7&o=5&pid=1.7',
						'name': '凉拌三丝',
						'num': '50',
						'price': '10',
					}, {
						'imgurl': 'https://tse2-mm.cn.bing.net/th/id/OIP.rUFShhBRcbqXB_vrGtHjdAHaE6?w=300&h=199&c=7&o=5&pid=1.7',
						'name': '凉拌牛肉',
						'num': '13',
						'price': '25',
					}]

				}, {
					title: '汤',
					food: [{
						'imgurl': 'https://tse2-mm.cn.bing.net/th/id/OIP.R-ufjl8dRK_jxXhGIEMOBwHaE7?w=268&h=178&c=7&o=5&pid=1.7',
						'name': '紫菜蛋花汤',
						'num': '15',
						'price': '15',
					}, {
						'imgurl': 'https://tse4-mm.cn.bing.net/th/id/OIP.B0EwOcXgBQKPVtK7_KVHFAHaE7?w=288&h=191&c=7&o=5&pid=1.7',
						'name': '番茄蛋汤',
						'num': '49',
						'price': '15',
					}, {
						'imgurl': 'https://tse3-mm.cn.bing.net/th/id/OIP.62f7v3GR97uxAoVnSJQT-AEsDh?w=227&h=175&c=7&o=5&pid=1.7',
						'name': '山药豆腐汤',
						'num': '50',
						'price': '15',
					}, ]
				},
				
				{
					title: '盖饭系列',
					food: [{
						'imgurl': 'https://tse3-mm.cn.bing.net/th/id/OIP.hSHDxgwvRyFHAzNIEuwb9wHaEa?w=286&h=180&c=7&o=5&pid=1.7',
						'name': '土豆肉丝盖饭',
						'num': '12',
						'price': '12',
					}, {
						'imgurl': 'https://tse2-mm.cn.bing.net/th/id/OIP.U9V0ual49kCODChQI__SwwHaE5?w=271&h=180&c=7&o=5&pid=1.7',
						'name': '鱼香茄子盖饭',
						'num': '12',
						'price': '10',
					}, {
						'imgurl': 'https://tse2-mm.cn.bing.net/th/id/OIP.uWFnizF27tu7qP2o1_9WGQHaFL?w=256&h=180&c=7&o=5&pid=1.7',
						'name': '青椒肉丝盖饭',
						'num': '23',
						'price': '15',
					}, {
						'imgurl': 'https://tse4-mm.cn.bing.net/th/id/OIP.frvPEdSCOlY5laH3F5nstAHaE8?w=291&h=193&c=7&o=5&pid=1.7',
						'name': '泡椒牛肉盖饭',
						'num': '23',
						'price': '20',
					}, ]
				},
				
				
				{
					title: '干锅',
					food: [{
						'imgurl': 'https://tse1-mm.cn.bing.net/th/id/OIP.zCAuQ2Y1UYhdwT28-fFewQHaFx?w=232&h=181&c=7&o=5&pid=1.7',
						'name': '干锅兔',
						'num': '23',
						'price': '30',
					}, {
						'imgurl': 'https://tse4-mm.cn.bing.net/th/id/OIP.C_5IvmEm9Sp32HTEWZQXKwHaE6?w=263&h=180&c=7&o=5&pid=1.7',
						'name': '干锅鸡',
						'num': '42',
						'price': '30',
					}, {
						'imgurl': 'https://tse1-mm.cn.bing.net/th/id/OIP.pwYUOb5iIi-gsesD5jOaxwEsDI?w=302&h=201&c=7&o=5&pid=1.7',
						'name': '干锅肥肠',
						'num': '50',
						'price': '25',
					}, {
						'imgurl': 'https://tse4-mm.cn.bing.net/th/id/OIP.m2wRy4Tb7BX_s65xbV0DzgHaE9?w=298&h=199&c=7&o=5&pid=1.7',
						'name': '干锅虾',
						'num': '13',
						'price': '35',
					}]
				
				},
				
				
				{
					title: '3337897897897897897',
					food: [{
						'imgurl': 'https://tse2-mm.cn.bing.net/th/id/OIP.R-ufjl8dRK_jxXhGIEMOBwHaE7?w=268&h=178&c=7&o=5&pid=1.7',
						'name': '紫菜蛋花汤',
						'num': '15',
						'price': '15',
					}, {
						'imgurl': 'https://tse4-mm.cn.bing.net/th/id/OIP.B0EwOcXgBQKPVtK7_KVHFAHaE7?w=288&h=191&c=7&o=5&pid=1.7',
						'name': '番茄蛋汤',
						'num': '49',
						'price': '15',
					},{
						'imgurl': 'https://tse4-mm.cn.bing.net/th/id/OIP.B0EwOcXgBQKPVtK7_KVHFAHaE7?w=288&h=191&c=7&o=5&pid=1.7',
						'name': '番茄蛋汤',
						'num': '49',
						'price': '15',
					},{
						'imgurl': 'https://tse4-mm.cn.bing.net/th/id/OIP.B0EwOcXgBQKPVtK7_KVHFAHaE7?w=288&h=191&c=7&o=5&pid=1.7',
						'name': '番茄蛋汤',
						'num': '49',
						'price': '15',
					},{
						'imgurl': 'https://tse4-mm.cn.bing.net/th/id/OIP.B0EwOcXgBQKPVtK7_KVHFAHaE7?w=288&h=191&c=7&o=5&pid=1.7',
						'name': '番茄蛋汤',
						'num': '49',
						'price': '15',
					},{
						'imgurl': 'https://tse4-mm.cn.bing.net/th/id/OIP.B0EwOcXgBQKPVtK7_KVHFAHaE7?w=288&h=191&c=7&o=5&pid=1.7',
						'name': '番茄蛋汤',
						'num': '49',
						'price': '15',
					},{
						'imgurl': 'https://tse4-mm.cn.bing.net/th/id/OIP.B0EwOcXgBQKPVtK7_KVHFAHaE7?w=288&h=191&c=7&o=5&pid=1.7',
						'name': '番茄蛋汤',
						'num': '49',
						'price': '15',
					},{
						'imgurl': 'https://tse4-mm.cn.bing.net/th/id/OIP.B0EwOcXgBQKPVtK7_KVHFAHaE7?w=288&h=191&c=7&o=5&pid=1.7',
						'name': '番茄蛋汤',
						'num': '49',
						'price': '15',
					},{
						'imgurl': 'https://tse4-mm.cn.bing.net/th/id/OIP.B0EwOcXgBQKPVtK7_KVHFAHaE7?w=288&h=191&c=7&o=5&pid=1.7',
						'name': '番茄蛋汤',
						'num': '49',
						'price': '15',
					},]
				},
				
				
				]
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
			//
			mainScroll(position) {	
				if(position!=undefined&&document.getElementById('Mainitem')!=null){
					let numY = this.numY
					let num = numY.length
					for(let i=0;i<num;i++){
						let num0 = (-position.y)-numY[i-1]
						let num1 = numY[i]-(-position.y)
						if((-position.y)<0){
							//title对象
							let item = document.getElementById('Mainitem').childNodes[0].getElementsByClassName('title')[0]
							//吸顶盒子
							let fixed = document.getElementById('fixed')
							if(position.y>0){
								fixed.style.display='none'
							}
							if(position.y<0){
								fixed.style.display='block'
							}
							this.addClass(item,'fixed')
							fixed.innerHTML = item.outerHTML
						}else if(num0>=0&&num1>0){
							//title对象
							let item = document.getElementById('Mainitem').childNodes[i-1].getElementsByClassName('title')[0]						
							//吸顶盒子
							let fixed = document.getElementById('fixed')
							if(position.y<0){
								fixed.style.display='block'
							}
							this.addClass(item,'fixed')
							fixed.innerHTML = item.outerHTML	
							this.count = i-1
							
						}else if((-position.y)>=numY[num-1]){
							let contentY = document.getElementById('Mainitem').parentNode.offsetHeight
							let wrapperY = document.getElementById('mainscroll').offsetHeight
							let thisY = contentY - wrapperY
							if(document.getElementById('Mainitem').childNodes[i].offsetTop>thisY){
								//title对象
								let item = document.getElementById('Mainitem').childNodes[i-1].getElementsByClassName('title')[0]
								//吸顶盒子
								let fixed = document.getElementById('fixed')
								if(position.y<0){
									fixed.style.display='block'
								}
								this.addClass(item,'fixed')
								fixed.innerHTML = item.outerHTML
								this.count = i
							}else{
								//title对象
								let item = document.getElementById('Mainitem').childNodes[i].getElementsByClassName('title')[0]
								//吸顶盒子
								let fixed = document.getElementById('fixed')
								if(position.y<0){
									fixed.style.display='block'
								}
								this.addClass(item,'fixed')
								fixed.innerHTML = item.outerHTML
								this.count = i
							}
						}
						
					}
					//删除class:title,手动增加属性
					// if(document.getElementById('fixed').getElementsByClassName('title')[0]){
					// 	let fixed = document.getElementById('fixed').getElementsByClassName('title')[0]
					// 	let fixedClass = fixed.getAttribute('class')
					// 	fixedClass = fixedClass.replace('title','')
					// 	fixed.setAttribute('class',fixedClass)
					
					// 	fixed.style.paddingLeft = '5vw'
					// 	fixed.style.backgroundColor = 'white'
					// 	fixed.style.height = '5vh'
					// 	fixed.style.lineHeight = '5vh'
					// 	fixed.style.fontWeight = '600'
					// 	fixed.style.overflow = 'hidden';
					// 	fixed.style.whiteSpace = 'nowrap';
					// 	fixed.style.textOverflow = 'ellipsis';
					// }
					//实现吸顶的title切换时的滚动效果
					let title = document.getElementById('Mainitem').childNodes[this.count].getElementsByClassName('title')[0]
					let titleheight = title.offsetHeight
					let fazhi = numY[this.count+1]-(-position.y)
					if(0<fazhi&&fazhi<titleheight){					
						let fixed = document.getElementById('fixed')
						let mySwipe = document.getElementById('mySwipe')
						fixed.style.top = (mySwipe.offsetHeight-titleheight+fazhi)+'px'
					}else{
						let fixed = document.getElementById('fixed')
						fixed.style.top = '21vh'
					}
				}			
			},
			//动态获取每个title的高度
			getTitles(){
				let num = this.foods.length
				let numY = []

				let contentY = this.contentY
				let wrapperY = this.wrapperY
				let thisY = contentY - wrapperY
				for (let i = 0; i < num; i++) {	
					if(i == num){
						return
					}
					if(document.getElementById('Mainitem').childNodes[i].offsetTop>thisY){
						numY[i]=thisY
					}else{
						numY[i] = document.getElementById('Mainitem').childNodes[i].offsetTop
					}
				}
				
				
				return numY
			},
			mainDown() {
				//console.log('mainDown')
				this.$refs.main_scroll.finishPullUp();
			},
			//添加class
			addClass(el, className) {
				if (this.hasClass(el, className)) {
					return
				}
				var newClass = el.className.split(' ');
				newClass.push(className);
				el.className = newClass.join(' ');
			},
			//判断是否有class
			hasClass(el, className) {
				var reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
				return reg.test(el.className)
			},
			leftClick(res) {
				let mainY = document.getElementById('Mainitem').childNodes[res].offsetTop
				let contentY = document.getElementById('Mainitem').parentNode.offsetHeight
				let wrapperY = document.getElementById('mainscroll').offsetHeight
				let thisY = contentY - wrapperY
				if (mainY > thisY) {
					this.$refs.main_scroll.scrollTo(0, -thisY);
				} else {
					this.$refs.main_scroll.scrollTo(0, -mainY);
				}
			}
		},
		components: {
			Title,
			Leftitem,
			Scroll,
			Mainitem,
		},
		created() {},
		activated() {
			this.$refs.aside_scroll.refresh();
			this.$refs.main_scroll.refresh();
			this.contentY = document.getElementById('Mainitem').parentNode.offsetHeight
			this.wrapperY= document.getElementById('mainscroll').offsetHeight
			this.numY = this.getTitles()
		},
	}
</script>

<style scoped>
	.home {
		height: 91vh;
	}

	.content {
		width: 100%;
	}

	.left {
		width: 30%;
		background-color: #f7f8fa;
		height: 100vh;
	}

	.main {
		width: 70%;
		padding: 0;

	}

	/* 文字换行 */
	.huanhang {
		white-space: normal;
		word-break: break-all;
		word-wrap: break-word;
	}

	.title {
		height: 21vh;
		z-index: 3;
	}

	.scroll {
		position: absolute;
		height: 70vh;
	}

	.leftscroll {
		width: 30%;
	}

	.mainscroll {
		width: 70%;
		background-color: #ffffff;
	}
	#fixed{
		position: fixed;
		z-index: 2;
		top: 21vh;
		left: 30%;
		width: 70%;
		display: block;
	}
</style>
