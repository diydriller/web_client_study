<template>
  <div class="sub_menu">
    <category-item-sub-menu-item v-for="subCategory in subCategories"
                                 :key="subCategory"
                                 :title="subCategory"
    />
  </div>
</template>

<script>
import CategoryItemSubMenuItem from './CategoryItemSubMenuItem.vue';

export default {
  components:{
    CategoryItemSubMenuItem
  },
  props:[
    'subCategories'
  ]
}
</script>

<style scoped>
.item .sub_menu{
  padding: 6px 6px 14px 80px;
  background: #1d1b31;
  display: none;
}

.item.showMenu .sub_menu{
  display: block;
}



</style>

