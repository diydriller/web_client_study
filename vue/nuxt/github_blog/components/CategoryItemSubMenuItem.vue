<template>
  <div class="sub_menu_item">
    <a href="#">{{title}}</a>
  </div>
</template>

<script>
export default {
  props:['title']
}
</script>

<style scoped>
.sub_menu_item a{
  color: #fff;
  font-size: 15px;
  padding: 5px 0;
  text-decoration: none;
  white-space: nowrap;
  opacity: 0.6;
}

.sub_menu_item a:hover{
  opacity: 1;
}

</style>
