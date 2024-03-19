<script setup>
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute();
const back = () => {
    router.go(-1);
}
const postId = route.query.postId;
console.log(postId)
</script>
<template>
    <div class="container-post">
        <p>Post</p>
        <button @click="back">back</button>
    </div>
</template>