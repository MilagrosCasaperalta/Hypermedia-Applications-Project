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

<style>
.card {
  background-color: #fdfaf6;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  width: 280px;
  transition: transform 0.2s ease;
  text-align: center;
}

.card:hover {
  transform: translateY(-5px);
}

.img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.title {
  display: block;
  font-weight: 600;
  font-size: 1.1rem;
  margin-top: 16px;
  color: #322A2A;
}

</style>
