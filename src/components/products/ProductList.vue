<template>
     <div class="container">
            <div class="row">
                <ProductItem />  
                <ProductItem />  
                <ProductItem />  
            </div>  
        </div>
</template>
<script>
import ProductItem from './ProductItem'
export default {
    name: "ProductList",
    components: {
        ProductItem
    }
}
</script>