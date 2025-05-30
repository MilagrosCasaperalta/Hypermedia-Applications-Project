<template>
  <div class="page-container">
    <h1 class="title">Activity Information Page</h1>
    <div class="activity-card">
      <div class="activity-info">
        <h2 class="activity-name">{{ activity.name }}</h2>
        <p class="activity-type">{{ activity.type }}</p>
        <p class="activity-start">{{ activity.start }}</p>
        <p class="activity-location">{{ activity.location }}</p>
        <p class="activity-location">{{ activity.start_time + ' to ' + activity.end_time }}</p>
        <p class="activity-description">{{ activity.description }}</p>       
        <div class="teacher-related">
          <strong>Related teachers:</strong>
        <ul>
        <li v-for="teacher in activity.teachers"">
            <NuxtLink :to="`/teachers/${teacher.teachers.alias}`">
            {{ teacher.teachers.name }}
            </NuxtLink>
        </li>
        </ul>
        </div>
      </div>
    </div>

  </div>
</template>


<script setup>
    const route = useRoute()
    const alias = route.params.alias
    const { data: activity } = await useFetch('/api/activities/' + alias)
</script>


