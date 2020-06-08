import axios from 'axios'
import { API_URL } from '../../constants'

const state = {
    CartItems: []
}

const getters = {
    cartItems(state) {
        return state.CartItems
    }
}

const mutations = {
    UPDATE_CART_ITEMS(state, payload) {
        state.CartItems = payload
    },
    REMOVE_CART(state, payload) {
        const index = state.CartItems.findIndex(item => item.id === payload.id)
        state.CartItems.splice(index, 1)
    },
    ADD_TO_CART(state, payload) {
        state.CartItems.push(payload)
    },
    UPDATED_QTY(state, payload) {
        const index = state.CartItems.findIndex(item => item.id === payload.id)
        state.CartItems[index].qty = payload.qty
    }
}

const actions = {
    async fetchCart(context) {
        const { data } = await axios.get(`${API_URL}/carts`)
        context.commit('UPDATE_CART_ITEMS', data)
    },
    async addToCart(context, payload) {
        const itemExist = false;
        if(itemExist) {
            this.updateQty(payload)
        } else {
            payload.qty = 1
            const { data } = await axios.post(`${API_URL}/carts`, payload)
            context.commit('ADD_TO_CART', data)
        }
    },
    async updateQty(context, payload) {
        const updatedQty = this.getQtyById(payload);
        payload.qty = updatedQty + 1
        const {data} = await axios.put(`${API_URL}/carts`, payload)
        context.commit('UPDATED_QTY', data)
    },
    async removeCart(context, payload) {
        const { data } =  await axios.delete(`${API_URL}/carts/${payload.id}`)
        context.commit('REMOVE_CART', data)
    },
    getQtyById(state, data) {
        const index = state.CartItem.findIndex(item => item.id === data.id)
        return state.CartItems[index].qty
    },
    checkItemIfExist(state, payload) {
        const index = state.CartItem.findIndex(item => item.id === payload.id)
        return index ? true: false;
    }
}

const cartModule = {
    state,
    getters,
    mutations,
    actions
}

export default cartModule;