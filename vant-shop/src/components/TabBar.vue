<template>
	
	<van-tabbar :value="active">
	  <van-tabbar-item v-for="(item,index) in nav"  :to="item.url" >
	    <img
	      slot="icon"
	      slot-scope="props"
	      :src="props.active ? item.active_icon : item.icon">
	  </van-tabbar-item>
	</van-tabbar>
	
	
</template>

<script>
	
	export default{
		data(){
			return {
				
				nav: [{
						url: "/",
						icon: require('@/assets/icons/home.png'),
						active_icon: require('@/assets/icons/home_active.png')
					},
					{
						url: "/category",
						icon: require('@/assets/icons/category.png'),
						active_icon: require('@/assets/icons/category_active.png')
					},
					{
						url: "/pin",
						icon: require('@/assets/icons/pin.png'),
						active_icon: require('@/assets/icons/pin_active.png')
					},
					{
						url: "/cart",
						icon: require('@/assets/icons/cart.png'),
						active_icon: require('@/assets/icons/cart.png')
					},
					{
						url: "/user",
						icon: require('@/assets/icons/user.png'),
						active_icon: require('@/assets/icons/user_active.png')
					},
				]
			};
		},props:{
			active:{
				default:0
			}
		}
	}
	
</script>

<style>
	
	.van-tabbar{
		box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
	}
	.van-tabbar-item__icon img{
		width: 64px!important;
		height: 50px!important;
	}
</style>