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
          <span v-for="(teacher, index) in event.events_teachers" :key="teacher.teachers.alias">
            <a :href="'/teachers/' + teacher.teachers.alias" class="information-link">
              {{ teacher.teachers.name }}
            </a>
            <span v-if="index < event.events_teachers.length - 1">, </span>
          </span>
        </h2>
        <p class="information-description">{{ event.description }}</p>
      </div>
    </div>
  </div>

  <div v-else class="loading">
    <p>Loading info...</p>
  </div>

  <section>
    <h2>What's next?</h2>
    <div id="card-container">
      <TheSmallCard 
        v-for="event in events" 
        :title="event.name"
        :subtitle="event.schedule"
        :link="`/activities/events/${event.alias}`" 
      />
    </div>
  </section>
</template>

<script setup>
const route = useRoute()
const alias = route.params.alias
const { data: event } = await useFetch('/api/activities/events/' + alias)
const { data: activities } = await useFetch('/api/activities/events')
const events = activities.value.sort((b, a) => new Date(b.schedule) - new Date(a.schedule)).slice(0, 5)
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