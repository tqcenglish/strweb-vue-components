import StrWebButton from './strweb-button/index.vue'
import StrWebSpan from './strweb-span/index.vue'

const components = {
  StrWebButton,
  StrWebSpan,
}

const install = function (Vue) {
  if (install.installed) return
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}