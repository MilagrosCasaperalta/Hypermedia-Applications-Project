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

    <section class="courses">
      <h2>Related Activities</h2>
      <div id="card-container">
        <TheSmallCard 
          v-for="course in filteredCourses" 
          :title="course.name"
          :subtitle="course.schedule"
          :link="`/activities/courses/${course.alias}`" 
        />
        <TheSmallCard 
          v-for="event in filteredEvents" 
          :title="event.name"
          :subtitle="event.schedule"
          :link="`/activities/events/${event.alias}`" 
        />
      </div>
    </section>

</template>

<script setup>
import '~/assets/css/activity-page.css'
const route = useRoute()
const alias = route.params.alias
const { data: teacher } = await useFetch('/api/teachers/' + alias)
const { data: courses } = await useFetch('/api/activities/courses')
const { data: events} = await useFetch('/api/activities/events')
const filteredCourses = courses.value.filter(course =>
  course.courses_teachers?.some(ct => ct.teachers?.alias === alias)
)
const filteredEvents = events.value.filter(event =>
  event.events_teachers?.some(et => et.teachers?.alias === alias)
)


</script>

<style scoped>

#card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px; 
  margin-top: 30px;
}

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
