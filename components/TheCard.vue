<template>
    <div class="card">
        <span class="title">{{ title }}</span>
      <NuxtLink :to = "link" ><button class="smallcard_button"><span>More Details</span></button></NuxtLink>
    </div>
</template>

<script setup>
    const props = defineProps(['title'])
</script>

<style>
    .card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
  }
</style>
