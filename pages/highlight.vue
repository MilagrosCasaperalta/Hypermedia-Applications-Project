<template>
  <main>
    <section class="activity-section">
      <h1>Meet Our promoting activities</h1>
      <div id="card-container">
        <TheSmallCard 
          v-for="activity in activities" 
          :title="activity.activities.name"
          :subtitle="activity.ads"
          :link="'/activities/' + activity.activities.alias" 
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import '~/assets/css/activity-page.css'
const { data: activities } = await useFetch('/api/highlight')
</script>
