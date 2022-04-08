<template>
  <div>
    <sidebar/>
    <div class="content">
      <Nuxt/>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Sidebar from "@/components/Sidebar.vue";

export default defineComponent({
  components:{
    Sidebar
  },
  setup(){
    return {}
  }
});
</script>


<style scoped>

.content{
  margin-left: 260px;
}
</style>
