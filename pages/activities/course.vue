<template>
  <main>
    <section class="activity-section">
      <h1>Meet Our Course</h1>
      <div id="card-container">
        <TheCard 
          v-for="course in courses" 
          :title="course.name"
          :link="'/activities/' + course.alias" 
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
const courses = types.value.filter(types =>
  types.name == 'Ashtanga' ||
  types.name == 'Pilates' ||
  types.name == 'Meditation' ||
  types.name == 'Therapy'
);


</script>