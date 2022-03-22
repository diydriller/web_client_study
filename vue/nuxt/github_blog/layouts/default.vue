<template>
  <div>
<!--    <sidebar/>-->
    <Nuxt class="content" />
  </div>
</template>

<script lang="ts">
import {Component,Vue} from "vue-property-decorator";
// import Sidebar from '@/components/Sidebar'
//
// @Component({
//   components:Sidebar
// })

export default class App extends Vue{
  // components:{
  //   Sidebar
  // }
}
</script>
<style scoped>
.content{
  margin-left: 260px;
}
</style>
