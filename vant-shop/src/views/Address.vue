<template>

	<div id="address">

		<van-nav-bar title="地址列表" left-text="" left-arrow @click-left="goBack" />

		<van-address-list v-model="chosenAddressId" :list="list" :disabled-list="disabledList" disabled-text="以下地址超出配送范围" @add="onAdd" @edit="onEdit" />

		<van-dialog v-model="show" :title="addDialog?'添加新地址':'修改'" show-cancel-button>
			<van-cell-group>
				<van-field v-model="editAddress.name" required clearable label="姓名" right-icon="question-o" placeholder="请输入用户名" />
				<van-field v-model="editAddress.tel" type="text" label="电话" placeholder="请输入电话" required />
				<van-field v-model="editAddress.address" required clearable label="地址" right-icon="question-o" placeholder="请输入用户名" />
			</van-cell-group>

		</van-dialog>

	</div>

</template>

<script>
	import Vue from "vue";
	import { Toast } from 'vant';
	import areaList from "@/assets/area.js";
	Vue.use(Toast);

	export default {
		data() {
			return {
				addDialog: false,
				editDialog: false,
				chosenAddressId: 1,
				areaList: {
					province_list: {

					},
					city_list: {

					},
					county_list: {

					}
				},
				editAddress: {},
				list: [{
						id: '1',
						name: '张三',
						tel: '13000000000',
						address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
					},
					{
						id: '2',
						name: '李四',
						tel: '1310000000',
						address: '浙江省杭州市拱墅区莫干山路 50 号'
					}
				],
				disabledList: [{
					id: '3',
					name: '王五',
					tel: '1320000000',
					address: '浙江省杭州市滨江区江南大道 15 号'
				}]
			};
		},
		computed: {
			
			show: {
				// 读
				get() {
					return this.addDialog || this.editDialog;
				},
				// 写
				set() {
					this.addDialog = false;
					this.editDialog = false;
				}
			}
		},
		methods: {
			goBack() {
				this.$router.go(-1);
			},
			onAdd() {
				this.editAddress = {};
				this.addDialog = true; //				Toast('新增地址');
			},

			onEdit(item, index) {
				this.editDialog = true;
				this.editAddress = { ...item
				};
				console.log(item);
				//				Toast('编辑地址:' + index);
			}
		}

	}
</script>

<style>

</style>