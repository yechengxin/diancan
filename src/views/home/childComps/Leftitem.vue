<template>
	<div>
		<div v-for='(item,leftitem) in title' class="caiming" :class="{active: leftitem === count}" @click="titleClick(leftitem,item)">
			<span>{{item.title}}</span>
		</div>
	</div>
</template>

<script>
	export default {
	  name:'Leftitem',
	  data() {
		  return {
		  }
	  },
	  methods: {
		  titleClick(leftitem,item) {
			// console.log(leftitem)
			// this.count = leftitem
			this.$emit('leftClick',leftitem)
		  }
	  }, 
	  components: {
	  },
	  created() {
	  },
	  mounted(){
	  },
	  props:{
		  title: Array,
		  count: Number,
	  },
	}
	
</script>

<style scoped>
	.caiming{
		width: 100%;
		padding: 5px 0;		
		text-align: center;
		background-color: #f7f8fa;
		color: #656666;
		font-weight: 600;
		overflow: hidden;
		white-space: nowrap;
		text-overflow:ellipsis;
	}
	.active{
		color: #333333;
		background-color: #ffffff;
	}
</style>
