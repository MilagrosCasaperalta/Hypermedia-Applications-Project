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
          <strong>Teaching This Class:</strong>
          <ul>
            <li v-for="teacher in activity.teachers" :key="teacher.teachers.id">
              <NuxtLink :to="`/teachers/${teacher.teachers.alias}`" class="teacher-link">
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


<style scoped>
.teacher-link {
  color: #8a6a4d;
  font-weight: 500;
  text-decoration: none;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  display: inline-block;
  transition: background-color 0.2s, color 0.2s;
}

.teacher-link:hover {
  background-color: #eee0d4;
  color: #5c4431;
}

.teacher-related ul {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
}

.teacher-related li {
  margin-bottom: 0.3rem;
}

</style>