<template>
	<div class="home">
		<van-search placeholder="请输入搜索关键词" />

		<van-swipe :autoplay="3000">
			<van-swipe-item v-for="(image, index) in images" :key="index">

				<img :src="image" />

			</van-swipe-item>
		</van-swipe>

		<tab-bar></tab-bar>
	</div>
</template>

<script>
	import TabBar from "@/components/TabBar";
	import Vue from 'vue';
	import { Lazyload } from 'vant';
	Vue.use(Lazyload);
	export default {
		name: 'home',
		data() {
			return {
				images: [require("@/assets/1.jpg"),require("@/assets/2.jpg"),require("@/assets/3.jpg"),require("@/assets/4.jpg")]
			};
		},
		components: {
			TabBar
		}
	}
</script>

<style>
	 .van-swipe-item img{
	 	width: 100%;
	 }
</style>