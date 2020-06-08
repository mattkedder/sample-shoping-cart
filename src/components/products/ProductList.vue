<template>
     <div class="container">
            <div class="row">
                <ProductItem v-for="product in productItems" :key="product.id" :product="product" />  
            </div>  
        </div>
</template>
<script>
import ProductItem from './ProductItem'
import { mapGetters } from 'vuex'

export default {
    name: "ProductList",
    components: {
        ProductItem
    },
    computed: {
        ...mapGetters(['productItems'])
    },
    created() {
        this.$store.dispatch('fetchProduct')
    }
}
</script>