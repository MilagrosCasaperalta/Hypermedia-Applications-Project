<template>
    <div class="card">
        <img class="img" :src="path" alt="Card Image"/>
        <span class="title">{{ title }}</span>
    </div>
</template>

<script setup>
  // Define props to accept title and path for the image
  const props = defineProps({
    title: String,
    path: String // The image path is passed as a prop
  });
</script>

<style scoped>
.card {
  width: 200px;
  border: 1px solid #ccc;
  padding: 16px;
  text-align: center;
}

.img {
  width: 100%;
  height: auto;
}

.title {
  margin-top: 8px;
  font-size: 16px;
  font-weight: bold;
}
</style>
