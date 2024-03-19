<script setup>
import { ref } from 'vue';

const items = ref([]); // สร้างตัวแปร items แบบ non-reactive และกำหนดค่าเริ่มต้นเป็นอาร์เรย์ว่าง
const test = ref('')

function handleAddItem(item) {
  items.value.push(item); // เพิ่ม item เข้าไปในอาร์เรย์ items
}

const adddatas =(e)=>{
  test.value=e.target.value
}

const adddata =()=>{
  console.log(test._value)
}

console.log(items)
</script>

<template>
  <p>{{ items }}</p>
  <button @click="handleAddItem('New Item')">Add Item</button>
  <input type="text" @change="adddatas">
  <button @click="adddata">add</button>
</template>
