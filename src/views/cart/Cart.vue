<template>
	<div>
		<Title class='title'></Title>
		<Cartitem></Cartitem>
	</div>
</template>

<script>
	import Title from './childComps/Title.vue'
	import Cartitem from './childComps/Cartitem.vue'
	export default {
	  name:'Cart',
	  data() {
		  return {
		  }
	  },
	  methods: {
	  }, 
	  components: {
		  Title,
		  Cartitem,
	  }
	}
</script>

<style scoped>
	.title {
		height: 9vh;
		line-height: 9vh
	}
</style>
