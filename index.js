const GlobalFuncPlugin = {}

GlobalFuncPlugin.install = function (Vue, options) {
    Vue.prototype.$globalFunc = options
}

export default GlobalFuncPlugin

