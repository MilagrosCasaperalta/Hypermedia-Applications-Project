<template>
    <div class="card">
        <span class="title">{{ title }}</span>
        <span class="subtitle">{{ subtitle }}</span>
        <div>
        <NuxtLink :to = "link" ><button class="card_button"><span>More Details</span></button></NuxtLink>
        </div>
    </div>
</template>

<script setup>
  const props = defineProps({
    title: String,
    subtitle: String,
    link: String
  });
</script>