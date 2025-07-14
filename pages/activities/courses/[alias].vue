<template>
  <div class="page-container" v-if="course">
    <Head>
      <title>{{ course.name }} | Course Information</title>
    </Head>
    <div class="information-card">
      <img
        :src="`/img/activities/courses/${course.alias}.jpg`"
        :alt="`${course.name} portrait`"
        class="information-image"
      />
      <div class="information">
        <h1 class="information-name">{{ course.name }}</h1>
        <h2 class="information-subtitle">{{ course.location }}</h2>
        <h2 class="information-subtitle">{{ course.schedule }}</h2>
        <h2 class="information-subtitle">
          <span
            v-for="(teacher, index) in course.courses_teachers"
            :key="teacher.teachers.alias"
          >
            <NuxtLink
              :to="`/teachers/${teacher.teachers.alias}`"
              class="information-link"
            >
              {{ teacher.teachers.name }}
            </NuxtLink
            ><span v-if="index < course.courses_teachers.length - 1">
              , 
            </span>
          </span>
        </h2>
        <p class="information-description">{{ course.description }}</p>
      </div>
    </div>
  </div>

  <div v-else class="loading">
    <p>Loading info...</p>
  </div>

  <section class="related-courses">
    <h2>Don't know where to start?</h2>
    <div class="related-grid">
      <TheSmallCard 
        v-for="highlight in highlights" 
        :key="highlight.courses.alias"
        :title="highlight.courses.name"
        :subtitle="highlight.ads"
        :link="`/activities/courses/${highlight.courses.alias}`" 
      />
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const alias = route.params.alias
const { data: course }     = await useFetch('/api/activities/courses/' + alias)
const { data: highlights } = await useFetch('/api/highlight')
</script>

<style scoped>
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;
}

.information-card {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  align-items: flex-start;
}

.information-image {
  width: 100%;
  max-width: 320px;
  border-radius: 8px;
  object-fit: cover;
}

.information {
  flex: 1;
  min-width: 280px;
}

.information-name {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  margin-bottom: 16px;
  color: #322a2a;
}

.information-subtitle {
  font-size: 1.1rem;
  color: #555;
  margin: 8px 0;
}

.information-link {
  color: #b59f4b;
  text-decoration: none;
  transition: color 0.2s;
}

.information-link:hover {
  color: #8a6a4d;
}

.information-description {
  margin-top: 20px;
  line-height: 1.6;
  color: #333;
}

.loading {
  padding: 80px;
  text-align: center;
  color: #888;
  font-size: 1.2rem;
}

.related-courses {
  max-width: 1200px;
  margin: 80px auto 80px;
  padding: 0 30px;
  color: #5c4431;
}

.related-courses h2 {
  font-size: clamp(1.6rem, 5vw, 2rem);
  text-align: center;
  margin-bottom: 40px;
  color: #5c4431;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

@media (max-width: 768px) {
  .page-container {
    padding: 40px 16px;
  }
  .information-card {
    flex-direction: column;
    padding: 16px;
    gap: 24px;
  }
  .information-image {
    max-width: 100%;
  }
  .related-courses {
    margin: 60px auto 60px;
    padding: 0 16px;
  }
  .related-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>
