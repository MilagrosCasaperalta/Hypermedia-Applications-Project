<template>
  <main>
    <section class="card-section">
      <h1>Our Events</h1>
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
  title: 'SoulFlow NYC: Events',
  meta: [
    { name: 'description', content: 'Explore our upcoming events at SoulFlow NYC, where community and mindfulness come together.' }
  ]
})
const { data: events } = await useFetch('/api/activities/events/')
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}

@media (max-width: 768px) {
  .card-section {
    padding: 40px 16px;
  }
  #card-container {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
