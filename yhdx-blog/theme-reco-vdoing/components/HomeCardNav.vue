<template>
	<div>


		<h1>银海大学岗前培训教程</h1>
		<div class="material-container">
			<div class="material-step" @click="handleScorll(-350)">&lt;</div>

			<ul class="product_list" ref="material_list">
				<li class="product_item" :class="'bg'+ (index%5+1)" v-for="(item,index) in $site.themeConfig.cardNav"
					:key="'li'+index" @click="handleRoute(item.link)">
					<div style="font-size: 24px;font-weight: bold;color: #fff;">
						{{item.text}}
					</div>
					<div style="font-size: 16px;padding: 10px 20px; color: #F0F0F0;">
						{{item.description}}
					</div>

				</li>
			</ul>

			<div class="material-step" @click="handleScorll(350)">&gt;</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'HomeCardNav',
		data() {
			return {}
		},
		methods: {
			async scrollAnimation(number = 0, time) {
				console.log("number:", number)
				// 1. 记录当前滚动条位置
				let nowScrollPos = this.$refs.material_list.scrollLeft
				console.log(nowScrollPos)
				// 2. 若未设置动画时间,则直接滚动完毕
				if (!time) {
					this.$refs.material_list.scrollLeft += number;
					return number;
				}
				const spacingTime = 20; // 设置循环的间隔时间  值越小消耗性能越高
				let spacingIndex = time / spacingTime; // 计算循环的次数
				console.log("spacingIndex:", spacingIndex)
				let nowPos = nowScrollPos; // 获取当前滚动条位置
				let everPos = (number) / spacingIndex; // 计算每次滑动的距离
				console.log("everPos:", everPos)
				let scrollTimer = setInterval(() => {
					if (spacingIndex >= 0) {
						spacingIndex--;        
						this.scrollAnimation(everPos);
					} else {
						clearInterval(scrollTimer); // 清除计时器
					}
				}, spacingTime);
				
			},
			handleScorll(step_length) {
				//this.$refs.material_list.scrollTo(this.$refs.material_list.scrollLeft + step_length, 0)
				//this.$refs.material_list.scrollLeft += step_length
				this.scrollAnimation(step_length, 1000)
				
			},
			handleRoute(link) {
				console.log(this.$router)
				this.$router.push(link)
			}

		}
	}
</script>

<style lang="stylus">
	.material-container {
		width: 100%;
		display: flex;
	}

	.material-step {
		width 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		font-size: 18px;
		color: #fff;
		margin: 5px 0px 10px 0px;
		background-color: #EBEEF5;
	}

	.material-step:hover {
		-webkit-box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
		box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
	}

	.product_list {
		padding: 0;
		width: 1050px;
		margin: 0 5px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: nowrap;
		overflow-x: scroll;
		transition: all 1s linear;
	}

	li {
		list-style: none;
		flex-shrink: 0;
	}

	.product_item {
		min-width: 340px;
		max-width: 340px;
		padding: 0;
		margin: 5px;
		height 200px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		transition: all 0.4s linear;
		cursor: pointer;
	}

	.product_item:hover {
		-webkit-box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
		box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
		-webkit-transform: translate3d(0, 0px, -2px);
		transform: translate3d(0, 1px, -2px);
		
	}

	.bg1 {
		background-image: url(../images/bg1.jpg);
		background-position: center;
		background-size 100% 100%;
	}

	.bg2 {
		background-image: url(../images/bg2.jpg);
		background-position: center;
		background-size 100% 100%;
	}

	.bg3 {
		background-image: url(../images/bg3.jpg);
		background-position: center;
		background-size 100% 100%;
	}

	.bg4 {
		background-image: url(../images/bg4.jpg);
		background-position: center;
		background-size 100% 100%;
	}

	.bg5 {
		background-image: url(../images/bg5.jpg);
		background-position: center;
		background-size 100% 100%;
	}
</style>
