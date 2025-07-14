<template>
  <NuxtLink :to="link" class="card">
    <div class="card-content">
      <h3 v-if="title" class="card-title">{{ title }}</h3>
      <p v-if="subtitle" class="card-subtitle">{{ subtitle }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  link: String
})
</script>

<style scoped>
.card {
  display: block;
  border-radius: 10px;
  padding: 1.2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  color: white;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
.card-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.card-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #5e3913;
  margin: 0;
  line-height: 1.2;
  text-transform: capitalize;
}
.card-subtitle {
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0;
  color: #8a6a4d;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
</style>
