<template>
  <div class="sub_menu">
    <sub-menu-item v-for="subCategory in subCategories"
                   :key="subCategory.subTitle"
                   :sub-title="subCategory.subTitle"
                   :title="title"
    />
  </div>
</template>

<script>
import SubMenuItem from './SubMenuItem.vue';

export default {
  components:{
    SubMenuItem
  },
  props:[
    'subCategories',
    'title'
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

