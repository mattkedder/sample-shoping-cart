import Vue from 'vue'
import Vuex from 'vuex'
import product from './product/index'
import cart from './cart/index'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        product,
        cart
    }
});