<template>
  <div class="page-container" v-if="teacher">
    <Head>
      <title>{{ teacher.name }} | Teacher Profile</title>
    </Head>

    <div class="teacher-card">
      <img
        :src="`/img/teachers/${teacher.id}.png`"
        :alt="`${teacher.name} portrait`"
        class="teacher-image"
      />

      <div class="teacher-info">
        <h1 class="teacher-name">{{ teacher.name }}</h1>
        <h2 class="teacher-role">{{ teacher.role }}</h2>
        <p class="teacher-description">{{ teacher.description }}</p>
      </div>
    </div>
  </div>

  <div v-else class="loading">
    <p>Loading teacher info...</p>
  </div>

  
      <div>
        <h3>Related activities</h3>
      </div>
      <div id="card-container">
        <TheSmallCard 
          v-for="activity in related" 
          :name="activity.name"
          :schedule="activity.schedule"
          :location="activity.location"
          :type="activity.types.name"
          :typeLink="`/activities/${activity.types.alias}`"
        />
      </div>

</template>

<script setup>
import '~/assets/css/activity-page.css'
const route = useRoute()
const alias = route.params.alias
const { data: teacher, error } = await useFetch('/api/teachers/' + alias)
const { data: activities } = await useFetch('/api/activities/all')

const related = activities.value.filter(activity =>
  activity.teachers?.some(t => t.teachers?.alias === alias)
)
console.log(related)
</script>

<style scoped>
.page-container {
  padding: 60px 30px;
}

.teacher-card {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}

.teacher-image {
  width: 300px;
  height: auto;
  object-fit: cover;
  border: 2px solid #ccc;
  border-radius: 0;
}

.teacher-info {
  max-width: 600px;
  flex: 1;
}

.teacher-name {
  font-size: 2.5rem;
  margin: 0;
  color: #322A2A;
}

.teacher-role {
  font-size: 1.4rem;
  color: #555;
  margin: 10px 0;
}

.teacher-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-top: 15px;
}

.loading {
  padding: 80px;
  text-align: center;
  color: #888;
  font-size: 1.2rem;
}
</style>
