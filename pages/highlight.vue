<template>
  <main>
    <section 
      class="activity-section"
      v-for="activity in activities" 
    >
      <h1>{{ activity.ads }}</h1>
      <div id="card-container">
        <TheSmallCard 
          :title="activity.activities.name"
          :subtitle="activity.activities.start_time"
          :link="'/activities/' + activity.activities.alias" 
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import '~/assets/css/activity-page.css'
const { data: activities } = await useFetch('/api/highlight')
console.log(activities)
</script>
