<template>
  <div id="app">
  	<section class="app__banner">
  		<span class="app__banner__firstChild">
  			<i class="fa fa-github"></i>
  			<a :href="link1" target="_blank"><h1>vue-skill-bar</h1></a>
  		</span>
  		<span class="app__banner__lastChild">
  			<a :href="link2" target="_blank">
  				<p class="npm-link">npm install --save vue-skill-bar</p>
  			</a>
  		</span>
  	</section>
	
	<section class="app__content">
		<div class="app__content__box">
			<div class="app__content__details">
				<h3>Default Bar</h3>
				<p>{{ code1 }}</p>
			</div>
			<div class="box-line"></div>
	  		<skill-bar skill="HTML" level="100" />
	  	</div>

		<div class="app__content__box">
			<div class="app__content__details">
	  			<h3>Custom Color</h3>
	  			<p>{{ code2 }}</p>
	  		</div>
	  		<div class="box-line"></div>
	  		<skill-bar barColor="#42b983" skill="CSS" level="90" />
		</div>

		<div class="app__content__box">
			<h3>Standard Sizes</h3>
			<div class="box-line"></div>
			<div class="app__content__bar">
				<div class="app__content__details">
					<h4>Custom</h4>
					<p>{{ code3 }}</p>
				</div>
		  		<skill-bar barSize="18" skill="Javascript" level="80" />
		  	</div>
			<div class="app__content__bar">
				<div class="app__content__details">
					<h4>Small</h4>
					<p>{{ code4 }}</p>
				</div>
		  		<skill-bar barSize="small" skill="C++" level="70" />
		  	</div>
		  	<div class="app__content__bar">
		  		<div class="app__content__details">
		  			<h4>Medium</h4>
		  			<p>{{ code5 }}</p>
		  		</div>
		  		<skill-bar barSize="medium" skill="Python" level="60" />
		  	</div>
		  	<div class="app__content__bar">
		  		<div class="app__content__details">
		  			<h4>Large</h4>
		  			<p>{{ code6 }}</p>
		  		</div>
		  		<skill-bar barSize="large" skill="Java" level="50" />
		  	</div>
	  	</div>
	</section>
  </div>
</template>

<script>
import SkillBar from './components/TheSkillBar.vue'

export default {
  name: 'app',
  components: {
    SkillBar
  },
  data: function() {
  	return {
  		link1: 'https://github.com/isanbitoy/vue-skill-bar',
  		link2: 'https://www.npmjs.com/package/vue-skill-bar',
  		code1: '<skill-bar skill="HTML" level="100"/>',
  		code2: '<skill-bar skill="CSS" level="90" barColor="#42b983"/>',
  		code3: '<skill-bar skill="Javascript" level="80" barSize="18"/>',
  		code4: '<skill-bar skill="C++" level="70" barSize="small"/>',
  		code5: '<skill-bar skill="Python" level="60" barSize="medium"/>',
  		code6: '<skill-bar skill="Java" level="50" barSize="large"/>'
  	}
  }
};
</script>

<style>
*, *::before, *::after {
  	padding: 0;
  	margin: 0;
  	box-sizing: border-box;
}
[v-cloak] {
  	display: none;
}
a { text-decoration: none; }
p {
	font-size: 0.8em; 
	font-family: 'Poppins', sans-serif;
}
h1 {
	color: #ffffff;
	font-size: 1.5em;
	font-family: 'Raleway', sans-serif;
}
h3 {
	font-size: 1.2em;
	font-family: 'Poppins', sans-serif;
}
h4 {
	color: #333;
	font-size: 0.9em;
	font-family: 'Laila', sans-serif;
}
.app__banner {
	width: 100%;
	height: 5em;
	background: #2196f3;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	color: #ffffff;
}
.app__banner__firstChild {
	display: flex;
	align-items: center;
	justify-content: center;
}
.fa-github {
	font-size: 3em;
	padding: 0 0.1em;
}


.app__content {
	max-width: 45em;
	margin: 0 auto;
}
.app__content__box {
	margin: 2em 1em;
}
.app__content__bar {
	margin: 2em 0;
}
.app__content__details {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
}
.box-line {
	position: relative;
}
.box-line::after {
	position: absolute;
	content: '';
	background: #eee;
	left: 0; bottom: 0;
    width: 100%; height: 1px;
}
.npm-link {
	color: #ffffff;
}
</style>
