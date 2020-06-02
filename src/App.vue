<template>
<div id="page-content-wrapper">
  <div class="row margin-top-10">
    <div class="col-md-7 offset-1">
       <ProductList />
    </div>
    <div class="col-md-4">
        <CartList />
    </div>
</div>
</div>
</template>

<script>
import ProductList from './components/products/ProductList'
import CartList from './components/cart/CartList'
export default {
  name: 'App',
  components: {
    ProductList,
    CartList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.product-description {
  transform: translate3d(0, 0, 0);
  transform-style: preserve-3d;
  perspective: 1000;
  backface-visibility: hidden;
}

body {
  color: #212121;
}

.container {
  padding-top: 25px;
  padding-bottom: 25px;
}

img {
  max-width: 100%;
}

hr {
  border-color: #e5e5e5;
  margin: 15px 0;
}

.secondary-text {
  color: #b6b6b6;
}

.list-inline {
  margin: 0;
}
.list-inline li {
  padding: 0;
}

.card-wrapper {
  position: relative;
  width: 100%;
  height: auto;
  border-bottom-width: 2px;
  overflow: hidden;
  margin-bottom: 30px;
}
.card-wrapper:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.card-wrapper:hover:after {
  opacity: 1;
}
.card-wrapper:hover .image-holder:before {
  opacity: .75;
}
.card-wrapper:hover .image-holder:after {
  opacity: 1;
  transform: translate(-50%, -50%);
}
.card-wrapper:hover .image-holder--original {
  transform: translateY(-15px);
}
.card-wrapper:hover .product-description {
  height: 205px;
}
@media (min-width: 768px) {
  .card-wrapper:hover .product-description {
    height: 185px;
  }
}

.image-holder {
  display: block;
  position: relative;
  width: 100%;
  height: 310px;
  background-color: #ffffff;
  z-index: 1;
}
@media (min-width: 768px) {
  .image-holder {
    height: 325px;
  }
}
.image-holder:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #007bff;
  opacity: 0;
  z-index: 5;
  transition: opacity 0.6s;
}
.image-holder:after {
  content: '+';
  font-family: 'Raleway', sans-serif;
  font-size: 70px;
  color: #007bff;
  text-align: center;
  position: absolute;
  top: 92.5px;
  left: 50%;
  width: 75px;
  height: 75px;
  line-height: 75px;
  background-color: #ffffff;
  opacity: 0;
  border-radius: 50%;
  z-index: 10;
  transform: translate(-50%, 100%);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease-out;
}
@media (min-width: 768px) {
  .image-holder:after {
    top: 107.5px;
  }
}
.image-holder .image-holder__link {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 15;
    border: 1px solid #e5e5e5;
}
.image-holder .image-holder--original {
  transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.image-liquid {
  width: 100%;
  height: 325px;
  background-size: cover;
  background-position: center center;
}

.product-description {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  padding: 10px 15px;
  overflow: hidden;
  background-color: #fafafa;
  border-top: 1px solid #e5e5e5;
  transition: height 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 2;
  border: 1px solid #e5e5e5;
}
@media (min-width: 768px) {
  .product-description {
    height: 65px;
  }
}
.product-description p {
  margin: 0 0 5px;
}
.product-description .product-description__title {
  font-family: 'Raleway', sans-serif;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  margin: 0;
  font-size: 18px;
  line-height: 1.25;
}
.product-description .product-description__title:after {
  content: '';
  width: 60px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), #fafafa);
}
.product-description .product-description__title a {
  text-decoration: none;
  color: inherit;
}
.product-description .product-description__category {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.product-description .product-description__price {
  color: #4CAF50;
  text-align: left;
  font-weight: bold;
  letter-spacing: 0.06em;
}
@media (min-width: 768px) {
  .product-description .product-description__price {
    text-align: right;
  }
}
.product-description .sizes-wrapper {
  margin-bottom: 15px;
}
.product-description .color-list {
  font-size: 0;
}
.product-description .color-list__item {
  width: 25px;
  height: 10px;
  position: relative;
  z-index: 1;
  transition: all .2s;
}
.product-description .color-list__item:hover {
  width: 40px;
}
.product-description .color-list__item--red {
  background-color: #F44336;
}
.product-description .color-list__item--blue {
  background-color: #448AFF;
}
.product-description .color-list__item--green {
  background-color: #CDDC39;
}
.product-description .color-list__item--orange {
  background-color: #FF9800;
}
.product-description .color-list__item--purple {
  background-color: #673AB7;
}
</style>
