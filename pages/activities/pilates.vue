<template>
  <main>
    <section class="activity-section">
      <h1>Meet Our Activity</h1>
      <div>
        <h3>Pilates</h3>
      </div>
      <div id="card-container">
        <TheSmallCard 
          v-for="activity in pilates" 
          :title="activity.name"
          :subtitle="activity.start_time"
          :link="'/activities/' + activity.alias" 
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import '~/assets/css/activity-page.css'
const { data: activities } = await useFetch('/api/activities')
const pilates = activities.value.filter(activity => activity.type === 'Pilates')

</script>
