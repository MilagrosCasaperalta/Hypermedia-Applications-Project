<template>
  <main>
    <h1>Our Activities</h1>
    <section class="card-section">
      <h3>Our Courses</h3>
      <div id="card-container">
        <TheCard 
          v-for="course in courses" 
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
const { data: courses } = await useFetch('/api/activities/courses')
const { data: events } = await useFetch('/api/activities/events')
</script>