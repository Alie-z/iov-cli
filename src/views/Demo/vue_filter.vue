<template>
  <div>
    <ul class="product">
      <li
          v-for="product in products"
          :key='product.name'
      >
        {{product.name}}-{{product.price|$_discount}}(这里使用的是全局mixin混入的filter) -- {{product.category|category}}(这里使用的是局部的filiter)
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        products: [
          {name: '苹果', price: 25, category: "水果"},
          {name: '香蕉', price: 15, category: "水果"},
          {name: '雪梨', price: 65, category: "水果"},
          {name: '宝马', price: 2500, category: "汽车"},
          {name: '奔驰', price: 10025, category: "汽车"},
          {name: '柑橘', price: 15, category: "水果"},
          {name: '奥迪', price: 25, category: "汽车"}
        ]
      }
    },
    filters: {
      category: function (value) {
        return value == "水果" ? value : '我不是水果';
      },
    },
    created() {
      console.log(this.myPlugin)
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  ul {
    li {
      padding: 6px 0;
    }
  }
</style>
