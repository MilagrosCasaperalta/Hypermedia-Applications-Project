<template>
  <main>
    <section class="activity-section">
      <h1>Meet Our Activity</h1>
      <div id="card-container">
        <h3>Pilates</h3>
        <TheCard 
          v-for="teacher in teachers" 
          :key="teacher.id" 
          :title="teacher.name"
          :subtitle="teacher.role"
          :link="'/teachers/' + teacher.alias" 
          :path="`/img/teachers/${teacher.id}.png`" 
          :alt="`${teacher.name} portrait`"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
const { data: activities } = await useFetch('/api/activities')
</script>