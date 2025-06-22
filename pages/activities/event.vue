<template>
  <main>
    <section class="activity-section">
      <h1>Meet Our Event</h1>
      <div id="card-container">
        <TheCard 
          v-for="event in events" 
          :title="event.name"
          :link="'/activities/' + event.alias" 
          :path="`/img/classes/ashtanga.png`" 
          :alt="` portrait`"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import '~/assets/css/activity-page.css'
const { data: types } = await useFetch('/api/activities')
const events = types.value.filter(types =>
  types.name == 'Seminar' ||
  types.name == 'Workshop' ||
  types.name == 'Retreat' ||
  types.name == 'Lecture'
);

</script>