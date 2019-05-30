<template>

	<div id="product">

		<van-swipe :autoplay="3000" indicator-color="white">
			<van-swipe-item v-for="(img ,index) in images" :key="index">
				<img :src="img" />
			</van-swipe-item>
		</van-swipe>

		<van-cell>

			<template slot="title">
				<span class="custom-text">美国伽力果（约680g/3个）</span>
			</template>
			<template slot="label">
				<div class="product-price">¥26.80</div>
				<van-row type="flex" justify="space-between">
					<van-col span="6">
						运费：包邮
					</van-col>
					<van-col span="6">
						剩余：19件
					</van-col>

					<van-col span="6">

					</van-col>
				</van-row>
			</template>
		</van-cell>

		<van-cell-group title="分组1">
			<van-cell title="单元格" icon="location-o" is-link />
			<van-cell title="单元格" icon="location-o" is-link />
			<van-cell title="单元格" icon="location-o" is-link />
			<van-cell title="单元格" icon="location-o" is-link />
		</van-cell-group>

		<!-- 底部的条 -->
		<van-goods-action>
			<van-goods-action-icon icon="chat-o" text="客服" />
			<van-goods-action-icon icon="cart-o" text="购物车" />
			<van-goods-action-icon icon="shop-o" text="店铺" />
			<van-goods-action-button type="warning" text="加入购物车" @click="showCustomAction=true" />
			<van-goods-action-button type="danger" text="立即购买" @click="showCustomAction=true" />
		</van-goods-action>

		<!--弹出层-->
		<van-sku v-model="showCustomAction" stepper-title="我要买" :sku="sku" :goods="goods" :goods-id="goodsId" :hide-stock="sku.hide_stock" :quota="quota" :quota-used="quotaUsed" show-add-cart-btn reset-stepper-on-hide :initial-sku="initialSku" @buy-clicked="onBuyClicked" @add-cart="onAddCartClicked">

			<template slot="sku-actions" slot-scope="props">
				<div class="van-sku-actions">

					<van-button square size="large" type="warning" @click="props.skuEventBus.$emit('sku:add')">
						加入购物车
					</van-button>

					<!-- 直接触发 sku 内部事件，通过内部事件执行 onBuyClicked 回调 -->
					<van-button square size="large" type="danger" @click="props.skuEventBus.$emit('sku:buy')">
						立即购买
					</van-button>
				</div>
			</template>
		</van-sku>

	</div>

</template>

<script>
	export default {

		data() {
			return {
				goodsId:1,
				quota:10,
				quotaUsed:1,
				showCustomAction: false,
				images: [require('@/assets/product_1.jpg'), require('@/assets/product_2.jpg'), require('@/assets/product_3.jpg'), require('@/assets/product_4.jpg')],
				sku: {
					// 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
					// 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
					tree: [{
						k: '颜色', // skuKeyName：规格类目名称
						v: [{
								id: '30349', // skuValueId：规格值 id
								name: '红色', // skuValueName：规格值名称
								imgUrl: 'https://img.yzcdn.cn/1.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
							},
							{
								id: '1215',
								name: '蓝色',
								imgUrl: 'https://img.yzcdn.cn/2.jpg'
							}
						],
						k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
					}],
					// 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
					list: [{
						id: 2259, // skuId，下单时后端需要
						price: 100, // 价格（单位分）
						s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
						s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
						s3: '0', // 最多包含3个规格值，为0表示不存在该规格
						stock_num: 110 // 当前 sku 组合对应的库存
					}],
					price: '1.00', // 默认价格（单位元）
					stock_num: 227, // 商品总库存
					collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
					none_sku: false, // 是否无规格商品
					messages: [{
						// 商品留言
						datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
						multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
						name: '留言', // 留言名称
						type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
						required: '1' // 是否必填 '1' 表示必填
					}],
					hide_stock: false // 是否隐藏剩余库存
				},
				initialSku: {
					// 键：skuKeyStr（sku 组合列表中当前类目对应的 key 值）
					// 值：skuValueId（规格值 id）
					s1: '30349',
					s2: '1193',
					// 初始选中数量
					selectedNum: 3
				},
				goods: {
					// 商品标题
					title: '测试商品',
					// 默认商品 sku 缩略图
					picture: 'https://img.yzcdn.cn/1.jpg'
				}
			};
		},
		methods: {
			onBuyClicked(){},
			onAddCartClicked(){},
		}

	}
</script>

<style lang="less">
	#product {
		.product-price {
			color: red;
		}
	}
</style>