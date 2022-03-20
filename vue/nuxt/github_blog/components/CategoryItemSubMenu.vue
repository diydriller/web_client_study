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
.sub_menu{
  padding: 6px 6px 14px 80px;
  background: #1d1b31;

}

.sub_menu.close{
  position: absolute;
  left:100%;
  top:-10px;
  padding: 10px 20px;
  border-radius: 0 6px 6px 0;
  transition: all 0.4s ease;
}

.sub_menu.close:hover{
  top:0;
}

</style>

