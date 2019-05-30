<template>

	<div id="user">
		<div class="user-info">
			<img src="@/assets/user_bg.png" />
		</div>

		<van-row type="flex" justify="space-around">
			<van-col span="6">
				<van-icon name="balance-pay" />
				<div>待付款</div>
			</van-col>
			<van-col span="6">
				<van-icon name="orders-o" />
				<div>待接单</div>
			</van-col>
			<van-col span="6">
				<van-icon name="tosend" />
				<div>待发货</div>
			</van-col>
			<van-col span="6">
				<van-icon name="logistics" />
				<div>待收货</div>
			</van-col>
		</van-row>

		<van-cell-group title="分组1">
			<van-cell title="单元格" icon="location-o" is-link />
			<van-cell title="单元格" icon="location-o" is-link />
			<van-cell title="单元格" icon="location-o" is-link />
			<van-cell title="单元格" icon="location-o" is-link />
		</van-cell-group>

		<van-cell-group title="分组1">
			<van-cell title="单元格" icon="location-o" is-link />
			<van-cell title="单元格" icon="location-o" is-link />
			<van-cell title="单元格" icon="location-o" is-link />
			<van-cell title="单元格" icon="location-o" is-link />
		</van-cell-group>

		<tab-bar :active='4'></tab-bar>

	</div>

</template>

<script>
	import TabBar from "@/components/TabBar";

	export default {

		components: {
			TabBar
		}
	}
</script>

<style lang="less">
	#user {
		.user-info img {
			width: 100%;
		}
		.van-row {
			margin: 10px 0;
			text-align: center;
			font-size: 12px;
			line-height: 1em;
			.van-icon {
				font-size: 24px;
			}
		}
	}
</style>