<template>
  <ul class="breadcrumb">
    <li v-for="(crumb, index) in breadcrumbs" :key="index">
      <NuxtLink :to="crumb.to">{{ crumb.title }}</NuxtLink>
      <span v-if="index < breadcrumbs.length - 1" class="separator">›</span>
    </li>
  </ul>
</template>

<script setup>

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

  crumbs.unshift({ to: '/', title: 'Home' })
  return crumbs
})

</script>

<style scoped>
.breadcrumb {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.breadcrumb li {
  display: flex;
  align-items: center;
}

.separator {
  margin: 0 8px;
}
</style>
