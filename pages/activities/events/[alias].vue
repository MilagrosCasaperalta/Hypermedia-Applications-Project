<template>
  <div class="page-container" v-if="event">
    <div class="information-card">
      <img
        :src="`/img/activities/events/${event.alias}.jpg`"
        :alt="`${event.name} portrait`"
        class="information-image"
      />
      <div class="information">
        <h1 class="information-name">{{ event.name }}</h1>
        <h2 class="information-subtitle">{{ event.location }}</h2>
        <h2 class="information-subtitle">{{ event.schedule }}</h2>
        <h2 class="information-subtitle">
          <span
            v-for="(teacher, index) in event.events_teachers"
            :key="teacher.teachers.alias"
          >
            <NuxtLink
              :to="`/teachers/${teacher.teachers.alias}`"
              class="information-link"
            >
              {{ teacher.teachers.name }}
            </NuxtLink
            ><span v-if="index < event.events_teachers.length - 1">
              ,
            </span>
          </span>
        </h2>
        <p class="information-description">{{ event.description }}</p>
      </div>
    </div>
  </div>

  <div v-else class="loading">
    <p>Loading info...</p>
  </div>

  <section class="related-events">
    <h2>What’s next?</h2>
    <div id="card-container">
      <TheSmallCard
        v-for="evt in events"
        :key="evt.alias"
        :title="evt.name"
        :subtitle="evt.schedule"
        :link="`/activities/events/${evt.alias}`"
      />
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const alias = route.params.alias
const { data: event } = await useFetch('/api/activities/events/' + alias)
const { data: activities } = await useFetch('/api/activities/events')
const events = activities.value
  .sort((b, a) => new Date(b.schedule) - new Date(a.schedule))
  .slice(0, 5)
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
  text-decoration: underline;
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

.related-events {
  max-width: 1200px;
  margin: 80px auto 80px;
  padding: 0 30px;
  color: #5c4431;
}

.related-events h2 {
  font-size: clamp(1.6rem, 5vw, 2rem);
  text-align: center;
  margin-bottom: 40px;
  color: #5c4431;
}

#card-container {
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
  .related-events {
    margin: 60px auto 60px;
    padding: 0 16px;
  }
  #card-container {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>
