<template>
  <div class="page-container">
    <h1 class="title">Teacher Information Page</h1>

    <div v-if="alias === 'ava-thompson'" class="teacher-card">
      <h2 class="teacher-name">Ava Thompson</h2>
      <img
        src="/img/teachers/ava-thompson.png"
        alt="Ava Thompson"
        class="teacher-image"
      />
      <p class="teacher-description">
        Ava Thompson is a lead instructor of yoga with over 10 years of experience,
        dedicated to helping students find balance and mindfulness through practice.
      </p>
    </div>

    <div v-else class="loading">
      <p>Loading teacher information...</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const alias = route.params.alias
const { data: teachers } = await useFetch('/api/teachers/' + alias)
</script>

<style scoped>
.title {
  color: #6b4c3b; /* marrone caldo */
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
}

.teacher-card {
  text-align: center;
}

.teacher-name {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #8a6a4d; /* verde/marrone soft */
}

.teacher-image {
  max-width: 220px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(250, 240, 230, 0.6); /* ombra crema */
  margin-bottom: 1.2rem;
}

.teacher-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444; /* stesso testo del main.css */
  padding: 0 1rem;
}

.loading {
  text-align: center;
  font-style: italic;
  color: #888;
}
</style>
