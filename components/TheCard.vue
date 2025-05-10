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

</style>
