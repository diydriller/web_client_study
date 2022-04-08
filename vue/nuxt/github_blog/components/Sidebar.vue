<template>
  <div class="sidebar">
    <title-item/>
    <div class="category">
      <category-item v-for="category in categories"
                     :key="category.title"
                     :title="category.title"
                     :icon="category.icon"
                     :subCategories="category.subCategories"
      />
    </div>
    <profile-item/>
  </div>
</template>

<script lang="ts">
import {defineComponent,computed} from '@vue/composition-api';
import CategoryItem from "@/components/CategoryItem.vue";
import TitleItem from "@/components/TitleItem.vue";
import ProfileItem from "@/components/ProfileItem.vue"
import Category from "~/data/category";

export default defineComponent({
  components:{
    CategoryItem,
    TitleItem,
    ProfileItem
  },
  setup(){
    const categories=computed(function (){
      return Category.categories;
    });

    return {categories};
  }
})
</script>

<style scoped>
.sidebar{
  position: fixed;
  top:0;
  left:0;
  height: 100%;
  width: 260px;
  background: #11101d;
}
.category{
  padding-top: 30px;
}
</style>
