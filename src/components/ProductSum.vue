<template>
<div class = "card">
<h3>{{product.name}}</h3>
<h4 class ="price">Price: ${{product.price}}</h4>

</div>
</template>
<script>
export default {
    props: ['product'],
}

</script>