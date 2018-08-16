<template>
	<div v-model="bgImg" id="login" style="">
		<div class="login_main">
			<input class="ivu-input" v-model="value1" placeholder="请输入手机号" clearable />
			<input class="ivu-input" v-model="value2" placeholder="请输入验证码" clearable style="border-top: 0;" />
			<a class="code" href="javascript:;">发送验证码</a>
			<Button class="btn" @click="go()">提交</Button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				value1: '',
				value2: '',
				bgImg: {
					backgroundImage: "url(" + require("../../assets/timgbg.jpeg") + ")",
					backgroundRepeat: "no-repeat",
					backgroundSize: "100% 100%",
					marginTop: "5px",
				}
			}
		},
		methods:{
			go() {
				this.$router.push({
					path: "/foot",
					query: {
					}
				});
			}

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#login {
		width: 100%;
		height: 100%;
		/*background-image: url(../../assets/timgbg.jpeg);*/
		/*background-size: 100% 100%;*/
	}
	
	.ivu-input {
		width: 80%;
		height: 3.2rem;
		line-height: 1.5;
		padding: 4px 7px;
		font-size: 0.9rem;
		border: 0;
		border-top: 1px solid #dcdee2;
		border-bottom: 1px solid #dcdee2;
		border-radius: 0;
		color: #515a6e;
		/*background-color: #fff;
		background-image: none;*/
		/*position: relative;*/
		/*cursor: text;*/
		/*border: antiquewhit*/
	}
	
	input {
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
		-webkit-user-select: none;
		-moz-user-focus: none;
		-moz-user-select: none;
		-webkit-appearance: none;
		outline: none;
		border: none;
	}
	
	.code {
		display: block;
		width: 4.5rem;
		height: 1.3rem;
		padding-top: 0.1rem;
		background: #ef8200;
		color: #FFFFFF;
		border-radius: 0.2rem;
		position: relative;
		top: -2.2rem;
		left: 68%;
	}
	
	.btn {
		margin-top: 0.5rem;
		width: 80%;
		height: 3.2rem;
		border-radius: 0.15rem;
		background: #ef8200;
		color: #fff;
		font-size: 0.9rem;
	}
</style>