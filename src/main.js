// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import MintUI from 'mint-ui' // 引入mint-UI中的方法
import 'mint-ui/lib/style.css' // 引入ming-UI中的样式

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import { Navbar, TabItem } from 'mint-ui';
// import { MessageBox } from 'mint-ui';

// Vue.component(Navbar.name, Navbar);
// Vue.component(TabItem.name, TabItem);
// Vue.component(MessageBox.name, MessageBox);
Vue.use(ElementUI)

Vue.use(MintUI) // 声明使用
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})