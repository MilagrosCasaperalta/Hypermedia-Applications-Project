 <!-- TheBreadcrumb are the used for orientation inside the web and it is auto-generated -->

<template>
  <nav
    v-if="breadcrumbs.length > 0"
    aria-label="breadcrumb"
    class="breadcrumb"
  >
    <ul>
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
  // split path into segments, e.g. '/activities/course' → ['activities','course']
  const segments = route.path.split('/').filter(Boolean)
  return segments.map((segment, i) => {
    // Titleize: 'my-page' → 'My Page'
    const title = segment
      .split('-')
      .map(s => s.charAt(0).toUpperCase() + s.slice(1))
      .join(' ')
    return {
      to: '/' + segments.slice(0, i + 1).join('/'),
      title
    }
  })
})
</script>

<style scoped>
.breadcrumb {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 1rem 3%;
  font-size: 2.2rem;
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
