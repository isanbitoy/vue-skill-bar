import Vue from 'vue'
import SkillBar from './TheSkillBar.vue'

const Plugin = {
	install(Vue) {
		Vue.component('skill-bar', SkillBar)
	}
};

Object.keys(Plugin).forEach(name => {
	Vue.component(name, Plugin[name])
})

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(Plugin)
}

export { SkillBar }
export default Plugin
