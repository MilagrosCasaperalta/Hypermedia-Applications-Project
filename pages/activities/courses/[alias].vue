<template>
  <div class="page-container" v-if="course">
    <div class="information-card">
      <img
        :src="`/img/teachers/1.png`"
        :alt="`${course.name} portrait`"
        class="information-image"
      />

      <div class="information">
        <h1 class="information-name">{{ course.name }}</h1>
        <h2 class="information-subtitle">{{ course.location }}</h2>
        <h2 class="information-subtitle">{{ course.schedule }}</h2>
        <h2 class="information-subtitle">
          <span v-for="(teacher, index) in course.courses_teachers">
            <a :href="'/teachers/' + teacher.teachers.alias" class="information-link">
              {{ teacher.teachers.name }}
            </a>
            <span v-if="index < course.courses_teachers.length - 1">, </span>
          </span>
          </h2>
        <p class="information-description">{{ course.description }}</p>
      </div>
    </div>
  </div>

  <div v-else class="loading">
    <p>Loading info...</p>
  </div>



</template>

<script setup>
const route = useRoute()
const alias = route.params.alias
const { data: course } = await useFetch('/api/activities/courses/' + alias)
</script>

<style scoped>
.page-container {
  padding: 60px 30px;
}

.information-card {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}

.information-image {
  width: 300px;
  height: auto;
  object-fit: cover;
  border: 2px solid #ccc;
  border-radius: 0;
}

.information-info {
  max-width: 600px;
  flex: 1;
}

.information-name {
  font-size: 2.5rem;
  margin: 0;
  color: #322A2A;
}

.information-subtitle {
  font-size: 1.4rem;
  color: #555;
  margin: 10px 0;
}

.information-description {
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