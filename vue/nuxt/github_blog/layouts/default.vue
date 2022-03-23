<template>
  <div>
<!--    <sidebar/>-->
    <test/>
    <Nuxt class="content" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components:{
  //   Sidebar:()=>import('~/components/Sidebar')
    Test:()=>import('~/components/Test')
  }
})
</script>
<style scoped>
.content{
  margin-left: 260px;
}
</style>
