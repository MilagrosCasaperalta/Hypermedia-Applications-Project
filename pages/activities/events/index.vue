<template>
  <main>
    <section class="card-section">
      <h1>Our Event</h1>
      <div id="card-container">
        <TheCard 
          v-for="course in courses" 
          :title="course.name"
          :subtitle="course.schedule"
          :link="`/activities/events/${course.alias}`" 
          :path="`/img/teachers/1.png`" 
        />
      </div>
    </section>
  </main>
</template>

<script setup>
const { data: courses } = await useFetch('/api/activities/events/')
</script>