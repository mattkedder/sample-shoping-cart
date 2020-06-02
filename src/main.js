import Vue from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');