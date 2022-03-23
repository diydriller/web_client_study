<template>
  <h2>{{user.name }}</h2>
  <h2>{{userName}}</h2>
  <h3>{{user.age}}</h3>
</template>

<script lang='ts'>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  defineComponent
} from 'vue';
import {UserInfoKey} from '@/types/UserInfoKey'

const component=defineComponent({
  name:'UserData',
  props:{
    firstName: String,
    lastName: String
  },
  setup(props){
    const uName=computed<string>(function(){
      return props.firstName+' '+props.lastName;
    })

    onBeforeMount(function(){
      console.log("before mount");
    });
    onMounted(function() {
      console.log("mounted");
    })
    onBeforeUpdate(function(){
      console.log("before update");
    })
    onUpdated(function(){
      console.log("updated");
    })
    onBeforeUnmount(function(){
      console.log("before unmount");
    })
    onUnmounted(function(){
      console.log("unmounted");
    })

    const user=inject(UserInfoKey);

    return {userName:uName,user}
  }
});
export default component;
</script>

