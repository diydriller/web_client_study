<template>
  <div class="item">
    <div class="category_item">
      <a href="#">
        <span class="category_img">
          <img :src="require(`~/assets/icon/${title}.png`)">
        </span>
        <span class="category_name">{{title}}</span>
      </a>
      <i class='bx bx-chevron-down' @click="toggleMenu"></i>
    </div>
    <sub-menu
      :subCategories="subCategories"
      :title="title"
    />
  </div>
</template>


<script>
import { defineComponent } from '@vue/composition-api';
import SubMenu from '@/components/SubMenu';

export default defineComponent({
  components:{
    SubMenu
  },
  props:['title','icon','subCategories'],
  setup(){

    const toggleMenu=function (e){
      let parent=e.target.parentElement.parentElement;
      parent.classList.toggle("showMenu");
    }

    return {toggleMenu};
  }
});
</script>


<style scoped>

.item{
  position:relative;
}

.category_item{
  display: flex;
  align-items: center;
  justify-content: space-between;
  trasition: all 0.4s ease;
}

.category_item:hover{
  background: #1d1b31;
}

.category_item .category_img{
  height: 50px;
  min-width: 78px;
  line-height: 50px;
  text-align: center;
}

.category_item img{
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(298deg) brightness(103%) contrast(103%);
  vertical-align:middle;
}

.category_item a{
  display: flex;
  align-items: center;
  text-decoration: none;
}

.category_item i{
  height: 50px;
  min-width: 78px;
  color:#fff;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  transition: all 0.3s ease;
}
.item.showMenu i{
  transform: rotate(-180deg);
}


.category_item .category_name{
  font-size: 18px;
  font-weight: 400;
  color:#fff;
}
</style>
