import axios from 'axios';
import { API_URL } from '../../constants';

const state = {
    ProductItems: []
}

const getters = {
    productItems(state) {
        return state.ProductItems
    }
}

const mutations = {
    UPDATE_PRODUCT_ITEMS(state, payload) {
        state.ProductItems = payload
    }
}

const actions = {
    async fetchProduct(context) {
        const { data } = await axios.get(`${API_URL}/products`)
        context.commit('UPDATE_PRODUCT_ITEMS', data)
    }
}

const productModule = {
    state,
    getters,
    mutations,
    actions
}

export default productModule;