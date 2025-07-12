<template>
  <main>
    <section class="card-section">
      <h1>Our Event</h1>
      <div id="card-container">
        <TheCard 
          v-for="event in events" 
          :title="event.name"
          :subtitle="event.schedule"
          :link="`/activities/events/${event.alias}`" 
          :path="`/img/teachers/1.png`" 
        />
      </div>
    </section>
  </main>
</template>

<script setup>
const { data: events } = await useFetch('/api/activities/events/')
</script>