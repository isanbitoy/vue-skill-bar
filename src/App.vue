<template>
  <div id="app">
  	<header class="app__header">
  		<div class="header__first-child">
            <a :href="github_link" target="_blank">
                <span :title="github_link">
                    <i class="fa fa-github"></i>
                </span>
            </a>
            <h1>vue-skill-bar</h1> 
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
		<section>
            <h1 class="header--line">Usage</h1>
            <code class="code--usage A">
                <pre>{{ usageCodeA }}</pre>
            </code>
            <h3>or</h3>
            <code class="code--usage B">
                <pre>{{ usageCodeB }}</pre>
            </code>    
		</section>

		<section>
			<div class="app__content--box">
				<div class="app__content--details">
					<span>default props</span>
					<span>{{ code_A }}</span>
				</div>
				<div class="app__content--bar">
					<skill-bar skill="HTML" level="100" />
				</div>
		  	</div>

			<div class="app__content--box">
				<div class="app__content--details">
		  			<span>custom color</span>
					<span>{{ code_B }}</span>
		  		</div>
		  		<div class="app__content--bar">
		  			<skill-bar barColor="#42b983" skill="CSS" level="90" />
		  		</div>
			</div>

			<div class="app__content--group">
				<h2>Custom Sizes</h2>
				<div class="box-line"></div>
				<div class="app__content--box">
					<div class="app__content--details">
						<span>Custom size</span>
						<span>{{ code_C }}</span>
				  	</div>
				  	<div class="app__content--bar">
			  			<skill-bar barSize="18" skill="Javascript" level="80" />
			  		</div>
			  	</div>

				<div class="app__content--box">
					<div class="app__content--details">
						<span>Small</span>
						<span>{{ code_D }}</span>
				  	</div>
				  	<div class="app__content--bar">
			  			<skill-bar barSize="small" skill="C++" level="70" />
			  		</div>
			  	</div>

			  	<div class="app__content--box">
			  		<div class="app__content--details">
						<span>Medium</span>
						<span>{{ code_E }}</span>
				  	</div>
				  	<div class="app__content--bar">
			  			<skill-bar barSize="medium" skill="Python" level="60" />
			  		</div>
			  	</div>

			  	<div class="app__content--box">
			  		<div class="app__content--details">
						<span>Large</span>
						<span>{{ code_F }}</span>
				  	</div>
				  	<div class="app__content--bar">
			  			<skill-bar barSize="large" skill="Java" level="50" />
			  		</div>
			  	</div>
		  	</div>
	  	</section>
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
  		code_F: '<skill-bar skill="Java" level="50" barSize="large"/>',
  		usageCodeA: 
`import Vue from 'vue' 
import SkillBar from 'vue-skill-bar' 

Vue.component('skill-bar', SkillBar)`,
            
        usageCodeB: 
`<template>
    <div class="app">
        <skill-bar skill="HTML" level="100" />
    </div>
</template>

<script>
import { SkillBar } from 'vue-skill-bar'

export default {
    el: '#app',
    components: {
        'skill-bar': SkillBar
    },
    data: function() {
        return {
            ...
        }
    }
}
<script>`
  	}
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";	
</style>
