<template>
	<section class="vue-skill-level"
		:style="bar_style">
		<div class="vue-skill-level__bar"
			:style="progress_style">
			<label class="vue-skill-level__skill"
				style="left: 8px;"
				:style="font_style">
				{{ skill }}
			</label>
			<label class="vue-skill-level__value"
				style="right: 8px;"
				:style="font_style">
				{{ level + '%' }}
			</label>
		</div>
	</section>
</template>
<script>
let isNum = function(n) {
	return !isNaN(parseFloat(n)) && isFinite(n)
}
export default {
	name: 'SkillBar',
	data: function() {
		return {
			intervalID: '',
			increment: 1
		}
	},
	props: {
		'skill': {
			type: String,
			default: ''
		},
		'initLevel': {
			default: 0
		},
		'level': {
			default: 0
		},
		'maxLevel': {
			default: 100
		},
		'barSize': {
			default: 16
		},
		'bgColor': {
			type: String,
			default: '#eee'
		},
		'barColor': {
			type: String,
			default: '#2196f3'
		},
		'fontColor': {
			type: String,
			default: '#f1f1f1'
		}
	},
	mounted() {
		this.intervalID = setInterval(() => {
			this.getLevelProgress(this.increment)
		}, 10)
	},
	methods: {
		getLevelProgress: function(value) {
			let avg = this.level/this.maxLevel*100
			this.initLevel = Math.min(Math.floor(this.initLevel+value), avg)
		}
	},
	computed: {
		font_style() {
			let style = {
				'position': 'absolute',
				'color': this.fontColor,
				'font-size': this.bar_size_px/1.5 + 'px',
				'user-select': 'none'
			}
			return style
		},
		bar_size_px() {
			switch(this.barSize) {
				case 'small': return 24
				case 'medium': return 32
				case 'large': return 48
			}
			return isNum(this.barSize) ? this.barSize : 32
		},
		bar_style() {
			let style = {
				'background': this.bgColor,
				'border': '0.1em solid' + this.bgColor,
				'border-radius': '4px',
				'margin': '0.2em 0',
				'overflow': 'hidden'
			}	
			return style
		},
		progress_style() {
			let style = {
				'position': 'relative',
				'background': this.barColor,
				'width': this.initLevel + '%',
				'height': this.bar_size_px + 'px',
				'transition': 'all 0.5s ease',
				'display': 'flex',
				'align-items': 'center',
			}
			return style 
		}
	},
	beforeDestroy: function() {
		clearInterval(this.intervalID)
	}
};
</script>
<style>
*, *::before, *::after {
	margin: 0; padding: 0;
	box-sizing: border-box;
}
</style>