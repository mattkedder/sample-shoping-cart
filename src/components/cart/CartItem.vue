<template>
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>{{ cart.name }} x {{ cart.qty }}</span> 
        <span class="btn btn-sm btn-secondary" @click="removeCart(cart)"><font-awesome-icon icon="trash" /></span>
    </li>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name: "CartItem",
    props: {
        cart: {
            type: Object,
            required: true
        }
    },
    methods: {
        ...mapActions(['removeCart'])
    }
}
</script>