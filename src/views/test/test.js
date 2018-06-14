/**
 * Created by Nemo on 2018/6/14.
 */
import Vue from 'vue'
import App from './test.vue'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
