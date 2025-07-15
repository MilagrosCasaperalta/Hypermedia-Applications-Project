<template>
  <main class="activities-page">
    <h1>Our Activities</h1>
    <section class="card-section">
      <h3>Our Courses</h3>
      <div id="card-container">
        <TheCard 
          v-for="course in courses" 
          :key="course.alias"
          :title="course.name"
          :subtitle="course.schedule"
          :link="`/activities/courses/${course.alias}`" 
          :path="`/img/activities/courses/${course.alias}.jpg`" 
        />
      </div>
    </section>
    <section class="card-section">
      <h3>Our Events</h3>
      <div id="card-container">
        <TheCard 
          v-for="event in events" 
          :key="event.alias"
          :title="event.name"
          :subtitle="event.schedule"
          :link="`/activities/events/${event.alias}`" 
          :path="`/img/activities/events/${event.alias}.jpg`" 
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import { useHead } from '#imports'

useHead({
  title: 'SoulFlow NYC: Activities & Events',
  meta: [
    { name: 'description', content: 'Find your flow. Yoga, breathwork, and community at SoulFlow NYC.' }
  ]
})
const { data: courses } = await useFetch('/api/activities/courses')
const { data: events }  = await useFetch('/api/activities/events')
</script>

<style scoped>
.activities-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 24px;
}
.activities-page h1 {
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);
  color: #322A2A;
  margin-bottom: 48px;
}
.card-section {
  margin-bottom: 64px;
}
.card-section h3 {
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: #5e3913;
  margin-bottom: 24px;
  text-align: left;
}
#card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}
@media (max-width: 768px) {
  .activities-page {
    padding: 40px 16px;
  }
  .activities-page h1 {
    margin-bottom: 32px;
  }
  .card-section {
    margin-bottom: 48px;
  }
  #card-container {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
