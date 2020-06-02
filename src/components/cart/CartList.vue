<template>
    <div class="container">
            <div class="row">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Cart <i class="fa fa-shopping-cart"></i></h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </ul>
                     <div class="card-body">
                        <button onClick="checkout()" class="btn btn-sm btn-primary text-white">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import CartItem from './CartItem'
export default {
    name: "CartList",
    components: {
        CartItem
    }
}
</script>