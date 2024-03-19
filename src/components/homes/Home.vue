<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios';
import { onMounted, ref, watchEffect } from 'vue';

const router = useRouter();
const handleClick = () => {
  // Navigate to '/about'
  router.push({ name: 'Post', query: { postId: 1 } })
}

const responseData = ref(null);

onMounted(() => {
  fetchData();
});

const fetchData = () => {
  axios.get('http://localhost:4001/product/joinproduct')
    .then(response => {
      // เก็บข้อมูลที่ได้รับจากการเรียก API ใน ref
      responseData.value = response.data;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

</script>
<template>
  <div class="container-Home">
    <p>Homes</p>
    <button @click="handleClick">post</button>
    <button @click="fetchData">click</button>
    <button @click="add">add</button>
    <div v-for="response in responseData" :key="responseData.id">
      <p>{{ response._id }}</p>
      <p>{{ response.nameProduct }}</p>
    </div>
  </div>
</template>
<style>
.container-Home {
  width: 100%;
  overflow: scroll;
  height: 90%;
}
</style>
