<template>
    <div class="container">
            <div class="row">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Cart <i class="fa fa-shopping-cart"></i></h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <CartItem v-for="cart in cartItems" :key="cart.id" :cart="cart" />
                    </ul>
                     <div class="card-body">
                        <button class="btn btn-sm btn-primary text-white">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import CartItem from './CartItem'
import { mapGetters } from 'vuex'
export default {
    name: "CartList",
    components: {
        CartItem
    },
    computed: {
        ...mapGetters(['cartItems'])
    },
    created() {
        this.$store.dispatch('fetchCart')
    }
}
</script>