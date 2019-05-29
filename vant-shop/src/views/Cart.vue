<template>

	<div id="cart">

		<van-nav-bar title="购物车" left-text="" left-arrow @click-left="goBack" />

		<van-checkbox-group class="card-goods" v-model="selected">
			<van-checkbox class="card-goods__item" v-for="item in goods" :key="item.id" :name="item.id">
				<van-card :title="item.title" :desc="item.desc" :num="item.num" :price="item.price" :thumb="item.thumb">
					<div slot="footer" @click.stop>
						<van-stepper v-model="item.num" />
					</div>
				</van-card>
			</van-checkbox>
		</van-checkbox-group>

		<van-submit-bar :price="sum" :button-text="'结算('+count+')' " @submit="onSubmit">
			<van-checkbox v-model="all">全选</van-checkbox>
		</van-submit-bar>

	</div>
</template>

<script>
	export default {

		data() {
			return {
				selected: [],
				all: false,
				goods: [{
					id: '1',
					title: '进口香蕉',
					desc: '约250g，2根',
					price: 200,
					num: 1,
					thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
				}, {
					id: '2',
					title: '陕西蜜梨',
					desc: '约600g',
					price: 690,
					num: 1,
					thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
				}, {
					id: '3',
					title: '美国伽力果',
					desc: '约680g/3个',
					price: 2680,
					num: 1,
					thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
				}]
			};
		},
		watch: {
			selected(val) {
				if(val.length == this.goods.length) {
					this.all = true;
				} else {
					this.all = false;
				}
			},
			all(val) {
				if(val) {
					this.selected = [];
					this.goods.forEach(item => {
						this.selected.push(item.id);
					});
				} else if(this.selected.length == this.goods.length) {
					this.selected = [];
				}
			}
		},
		computed: {
			sum() {
				let n = 0;
				this.goods.forEach(item => {

					if(this.selected.indexOf(item.id) > -1) {
						n += item.num * item.price*100;
					}
				});
				return n;
			},
			count() {
				let n = 0;
				this.goods.forEach(item => {

					if(this.selected.indexOf(item.id) > -1) {
						n += item.num;
					}
				});
				return n;
			},
			onSubmit(){
				console.log("结算")
			}
		},
		methods: {

			goBack() {
				this.$router.go(-1);
			}

		}

	}
</script>

<style lang="less">
	#cart {
		.card-goods__item {
			padding-left: 10px;
			background-color: #FFFFFF;
		}
		.van-checkbox__label {
			width: 100%;
		}
		.van-submit-bar__bar {
			padding-left: 10px;
		}
	}
</style>