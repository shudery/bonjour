// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vueScrollBehavior from 'vue-scroll-behavior'
import fastclick from 'fastclick'
import 'normalize.css'
import { Button } from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.component(Button.name, Button);

Vue.use(vueScrollBehavior, { router: router })

// 消除手机端点击300ms延迟
// fastclick.attach(document.body);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})