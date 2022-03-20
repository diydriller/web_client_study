<template>
  <div class="profile_content">
    <div class="profile_img">
      <img :src="require('~/assets/img/profile.jpg')"/>
    </div>
    <div class="profile_name">diydriller</div>
  </div>
</template>

<style scoped>

.profile_content{
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.profile_content .profile_img img{
  width:52px;
  height:52px;
  object-fit: cover;
  border-radius: 16px;
  padding: 10px;
  background:#1d1b31;
  margin: 0 14px 0 12px;
}

.profile_content .profile_name{
  color: #fff;
  font-size: 18px;
  font-weight: 500;
}


</style>
