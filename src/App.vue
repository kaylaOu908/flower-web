<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="/images/83945574-fleur-magasin-logo-ou-emblème-logo-de-modèle-géométrique-pour-boutique-de-fleurs.jpg">
      </router-link>
    </div>
     <div id="side">
      <router-link to="/browse">
        <div class="menu-item browse">

          <div class="dropdown">
      <button class ="dropbtn">View</button>

      <div class = "dropdown-content">
      <li class="pure-menu-item"><a @click="select('Rose')" href="#" class="pure-menu-link">Rose</a></li>
      <li class="pure-menu-item"><a @click="select('Bouquet')" href="#" class="pure-menu-link">Bouquet</a></li>
      </div>
      
      </div>
          </div>
      </router-link>
      
      <router-link to="/cart">
        <div class="menu-item">
          <img src="/images/trolley-shopping-cart-icon-logo-Ideas-I-Graphics-3452854-1-1-580x387.jpg">
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
   <ProductList :products="products" />
</div>
    
    
     

     
</template>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 50px 100px;
}
#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}
#menu a {
  color: #B84901;
}
#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}
#brand img {
  height: 200px;
}
#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}
#side img {
  width: 50px;
}
.menu-item {
  display: flex;
  flex-direction: column;
}
.menu-item p {
  margin: 0px;
}
.browse {
  margin-right: 50px;
}
.dropbtn {
  background-color: white;
  color: black;
  padding: 16px;
  font-size: 16px;
  border: none;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {background-color: #ddd;}
.dropdown:hover .dropdown-content {display: block;}
.dropdown:hover .dropbtn {background-color: #3e8e41;}


</style>
<script>
import ProductList from ".//components/ProductList.vue"
export default {
  name: 'multi-word-component-names',
  components: {
    ProductList
  },
  data() {
    return {
      category: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.category === this.category);
    }
  },
  methods: {
    select(category) {
      this.category = category;
    }
  }
}
</script>