import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

Vue.config.productionTip = false
let data = {
  currentID: 0,
  products: mock,
  cart: [{
    id: '',
    name: '',
    price: '',
    catagory: '',
    image: '',
  }],
  getCart(){
    return this.cart;
  },
  addToCart(name,price,catagory,image){
    this.cart.push({
    id: this.currentID,
    name:name,
    price:price,
    catagory: catagory,
    image: image
   

  });
}

}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')