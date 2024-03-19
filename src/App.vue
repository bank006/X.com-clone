<script setup>
import Leftbar from './components/Leftbar/Leftbar.vue'
import Topbar from './components/Topbar/Topbar.vue'
import Rightbar from './components/rigtbar/Rightbar.vue';
</script>

<template>
  <div id="apps">
    <Topbar />
    <div id="centers">
      <Leftbar style=" width: 33%;" />
      <router-view style=" width: 33%;" />
      <Rightbar style="width: 33%;"/>
    </div>

  </div>

</template>
<style>

/* @media only screen and (max-width: 986px) {
  #apps {
 background-color: red;
} */




#apps {
  overflow: hidden;
  height: 100vh;
  width: auto;
  overflow: hidden;
}

#centers{
  height: 90%;
  width: 100%;
  display: flex;
  border: 1px solid black;
}

</style>
