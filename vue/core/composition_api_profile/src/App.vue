<template>
  <section class="container">
    <user-data :firstName='firstName' :lastName='lastName'></user-data>
    <button @click='setAge'>Change Age</button>
    <div>
      <input type='text' placeholder='First Name' v-model='firstName'/>
      <input type='text' placeholder='Last Name' v-model='lastName'/>
    </div>
  </section>
</template>

<script lang='ts'>
import { reactive, ref, watch, provide, defineComponent } from 'vue';
import UserData from '@/components/UserData.vue';
import {UserInfo} from '@/types/UserInfo'
import {UserInfoKey} from '@/types/UserInfoKey'

const component=defineComponent({
  name:'App',
  components: { UserData },
  setup(){
    const user:UserInfo=reactive({
      name: 'Maximilian',
      age: 31
    })
    const firstName=ref<string>('');
    const lastName=ref<string>('');


    watch([firstName,lastName],function(newValue,oldValue){
      console.log('oldName: '+oldValue[0]+' '+oldValue[1]);
      console.log('newName: '+newValue[0]+' '+newValue[1]);
    })

    provide(UserInfoKey,user);

    setTimeout(function(){
      user.name='Max';
    },2000);
    function setAge(){
      user.age=33;
    }

    return {setAge,firstName,lastName}
  }
});
export default component;
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
