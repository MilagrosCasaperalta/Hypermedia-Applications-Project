<template>
  <main>
    <section class="card-section">
      <h1>Our Courses</h1>
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
  </main>
</template>

<script setup>
const { data: courses } = await useFetch('/api/activities/courses/')
</script>

<style scoped>
.card-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 24px;
  text-align: center;
}

.card-section h1 {
  font-size: clamp(2rem, 6vw, 2.8rem);
  color: #322A2A;
  margin-bottom: 32px;
}

#card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

@media (max-width: 768px) {
  .card-section {
    padding: 40px 16px;
  }
  #card-container {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
