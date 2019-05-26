<template>
  <div id="app">
  	<header class="app__header">
  		<div class="header__first-child">
            <a :href="github_link" target="_blank">
                <span :title="github_link">
                    <i class="fa fa-github"></i>
                </span>
            </a>
            <h2>vue-skill-bar</h2> 
        </div>
        <div><p>a lightweight progress skill bar for vue</p></div>
        <div class="header__last-child">
            <h3 class="install--command">{{ install_code }}</h3>
        </div>
        <nav>
            <a :href="github_link" target="_blank">
                <img :src="github_star" />
            </a>
            <a :href="npm_link" target="_blank">
                <img :src="npm_version" />
                <img :src="npm_download" />
            </a>
            <a :href="vue_link">
                <img :src="vue_svg" />
            </a>
        </nav>
  	</header>
	
	<main class="app__content">
		<div class="app__content--box">
			<div class="app__content--details">
				<span><code>default props</code></span>
				<span><code>{{ code_A }}</code></span>
			</div>
			<div class="app__content--bar">
				<skill-bar skill="HTML" level="100" />
			</div>
	  	</div>

		<div class="app__content--box">
			<div class="app__content--details">
	  			<span><code>custom color</code></span>
				<span><code>{{ code_B }}</code></span>
	  		</div>
	  		<div class="app__content--bar">
	  			<skill-bar barColor="#42b983" skill="CSS" level="90" />
	  		</div>
		</div>

		<div class="app__content--group">
			<h1><code>Custom Sizes</code></h1>
			<div class="box-line"></div>
			<div class="app__content--box">
				<div class="app__content--details">
					<span><code>Specific bar size</code></span>
					<span><code>{{ code_C }}</code></span>
			  	</div>
			  	<div class="app__content--bar">
		  			<skill-bar barSize="18" skill="Javascript" level="80" />
		  		</div>
		  	</div>

			<div class="app__content--box">
				<div class="app__content--details">
					<span><code>Small bar size</code></span>
					<span><code>{{ code_D }}</code></span>
			  	</div>
			  	<div class="app__content--bar">
		  			<skill-bar barSize="small" skill="C++" level="70" />
		  		</div>
		  	</div>

		  	<div class="app__content--box">
		  		<div class="app__content--details">
					<span><code>Medium bar size</code></span>
					<span><code>{{ code_E }}</code></span>
			  	</div>
			  	<div class="app__content--bar">
		  			<skill-bar barSize="medium" skill="Python" level="60" />
		  		</div>
		  	</div>

		  	<div class="app__content--box">
		  		<div class="app__content--details">
					<span><code>Large bar size</code></span>
					<span><code>{{ code_F }}</code></span>
			  	</div>
			  	<div class="app__content--bar">
		  			<skill-bar barSize="large" skill="Java" level="50" />
		  		</div>
		  	</div>
	  	</div>
	</main>
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
  		github_link: 'https://github.com/isanbitoy/vue-skill-bar',
  		npm_link: 'https://www.npmjs.com/package/vue-skill-bar',
  		vue_link: 'https://vuejs.org/',
        install_code: 'npm install --save vue-skill-bar',
        github_star: 'https://img.shields.io/github/stars/isanbitoy/vue-skill-bar.svg?style=social&label=Star',
        npm_version: 'https://img.shields.io/npm/v/vue-skill-bar.svg',
        npm_download: 'https://img.shields.io/npm/dm/vue-skill-bar.svg',
        vue_svg: 'https://img.shields.io/badge/vue-3.0-green.svg',

  		code_A: '<skill-bar skill="HTML" level="100"/>',
  		code_B: '<skill-bar skill="CSS" level="90" barColor="#42b983"/>',
  		code_C: '<skill-bar skill="Javascript" level="80" barSize="18"/>',
  		code_D: '<skill-bar skill="C++" level="70" barSize="small"/>',
  		code_E: '<skill-bar skill="Python" level="60" barSize="medium"/>',
  		code_F: '<skill-bar skill="Java" level="50" barSize="large"/>'
  	}
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";	
</style>
<!--
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
-->
