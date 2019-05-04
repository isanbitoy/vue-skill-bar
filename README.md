# vue-skill-bar
a ligthweight progress skill bar for vue

## Install
```
npm install --save-dev vue-skill-bar
```

## Usage
### ES6
```
import Vue from 'vue'
import { SkillBar } from 'vue-skill-bar'

Vue.component('skill-bar', SkillBar)

```
or
```
<template>
	<div id="app">
		<skill-bar barSize="small" skill="CSS" level="90" />
	</div>
</template>
<script>
import { SkillBar } from 'vue-skill-bar'
export default {
	components: {
		'skill-bar': SkillBar
	},
	data: function() {
		return { 
			... 
		}
	}
}
</script>
```
## Examples

### Custom bar size
```
<skill-bar barSize="large" skill="CSS" level="80" />
```
### Custom bar color
```
<skill-bar barSize="large" barColor="#0e7a0d" skill="CSS" level="80" />
```

## Available Options

| Props | Type | Values | default |
| --- | ---	| --- | --- |
| skill | String | text to display | none |
| level | Number | 0 - 100 | 0 |
| maxLevel | Number | 100 | 100 |
| barSize | Number \ String | small, medium, large | 32 |
| barColor | String | Color | #2196f3 |
| bgColor | String | Color | #eee |
| fontColor | String | Color | #f1f1f1 |

## License

vue-skill-bar is an open source and release under the [MIT License](LICENSE).

Copyright (C) 2019 [Lisandro A. Bitoy](https://github.com/isanbitoy).




