<template>
  <main>
    <section class="card-section">
      <h1>Our Course</h1>
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
  </main>
</template>

<script setup>
const { data: courses } = await useFetch('/api/activities/courses/')
</script>