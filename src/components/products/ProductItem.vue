<template>
      <div class="col-xs-12 col-sm-6 col-md-4">
        <article class="card-wrapper">
            <div class="image-holder">
                <a href="#" @click="addProduct(product)" class="image-holder__link"></a>
                <div class="image-liquid image-holder--original" v-bind:style="{ 'background-image': 'url(' + product.image  + ')' }" >
                </div>
            </div>

            <div class="product-description">
                <!-- title -->
                <h1 class="product-description__title">
                    <a href="#">						
                        {{ product.name }}
                        </a>
                </h1>

                <!-- category and price -->
                <div class="row">
                    <div class="col-xs-12 col-sm-8 product-description__category secondary-text">
                            Rp. {{ formatPrice(product.price) }}
                    </div>
                </div>
            </div>

        </article>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    name: "ProducItem",
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    methods:{
        ...mapActions(['addToCart']),
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        addProduct(product) {
             this.addToCart(product)
        }
    }
}
</script>