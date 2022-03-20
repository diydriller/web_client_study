<template>
  <div>
    <sidebar/>
    <Nuxt class="content" />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
export default{
  components:{
    Sidebar
  }
}
</script>
<style scoped>
.content{
  margin-left: 260px;
}
</style>
