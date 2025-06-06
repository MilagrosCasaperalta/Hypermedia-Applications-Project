<template>
  <nav aria-label="breadcrumb">
    <ul class="breadcrumb">
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <span v-if="index === breadcrumbs.length - 1" class="current">
          {{ crumb.title }}
        </span>
        <NuxtLink v-else :to="crumb.to">{{ crumb.title }}</NuxtLink>
        <span v-if="index < breadcrumbs.length - 1" class="separator">›</span>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const breadcrumbs = computed(() => {
  const segments = route.path.split('/').filter(Boolean)
  const crumbs = []

  segments.forEach((segment, index) => {
    const formatted = segment
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ')

    crumbs.push({
      to: '/' + segments.slice(0, index + 1).join('/'),
      title: formatted
    })
  })

  return crumbs
})
</script>

<style scoped>
.breadcrumb {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  font-size: 0.875rem;
  font-family: 'Segoe UI', sans-serif;
  color: #8a6a4d;
  flex-wrap: wrap;
}

.breadcrumb li {
  display: flex;
  align-items: center;
}

.breadcrumb a {
  color: #8a6a4d;
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb a:hover {
  color: #a87a4a;
  text-decoration: underline;
}

.separator {
  margin: 0 0.5rem;
  color: #aaa;
}

.current {
  font-weight: 500;
  color: #5c4431;
}
</style>
