<template>
  <NuxtLink :to="link" class="card clickable-card">
    <span v-if="title" class="title">{{ title }}</span>
    <span v-if="subtitle" class="subtitle">{{ subtitle }}</span>
  </NuxtLink>
</template>

<script setup>
const props = defineProps(['title', 'subtitle', 'link'])
</script>

<style scoped>
.card {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: box-shadow 0.2s;
}

.clickable-card {
  display: block;
  text-decoration: none;
  color: inherit;
}

.clickable-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.title {
  display: block;
  font-weight: 700;
  font-size: 1.25rem;
  margin: 16px 0 6px 0;
  color: #ddd;
  letter-spacing: 0.02em;
  text-transform: capitalize;
}

.subtitle {
  display: block;
  font-weight: 500;
  font-size: 1rem;
  color: #ddd;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
</style>