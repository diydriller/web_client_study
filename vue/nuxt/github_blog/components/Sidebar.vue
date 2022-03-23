<!--<template>-->
<!--  <div class="sidebar">-->
<!--    <title-item/>-->
<!--    <div class="category">-->
<!--      <category-item v-for="category in categories"-->
<!--                     :key="category"-->
<!--                     :title="category.title"-->
<!--                     :icon="category.icon"-->
<!--                     :subCategories="category.subCategories"-->
<!--      />-->
<!--    </div>-->
<!--    <profile-item/>-->
<!--  </div>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import CategoryItem from "./CategoryItem.vue";-->
<!--import TitleItem from "./TitleItem";-->
<!--import ProfileItem from "./ProfileItem"-->
<!--import Vue from "vue";-->

<!--export default Vue.extend({-->
<!--  name:'Sidebar',-->
<!--  components:{-->
<!--    CategoryItem:()=>import('~/components/TitleItem'),-->
<!--    TitleItem:()=>import('~/components/TitleItem'),-->
<!--    ProfileItem:()=>import('~/components/ProfileItem')-->
<!--  },-->
<!--  computed:{-->
<!--    categories(){-->
<!--      return this.$store.state.categories;-->
<!--    }-->
<!--  }-->

<!--})-->
<!--</script>-->

<!--<style scoped>-->
<!--.sidebar{-->
<!--  position: fixed;-->
<!--  top:0;-->
<!--  left:0;-->
<!--  height: 100%;-->
<!--  width: 260px;-->
<!--  background: #11101d;-->
<!--}-->
<!--.category{-->
<!--  padding-top: 30px;-->
<!--}-->
<!--</style>-->
