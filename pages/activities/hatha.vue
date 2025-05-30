<template>
  <main>
    <section class="activity-section">
      <h1>Meet Our Activity</h1>
      <div>
        <h3>Hatha Yoga</h3>
      </div>
      <div id="card-container">
        <TheSmallCard 
          v-for="activity in hatha" 
          :title="activity.name"
          :subtitle="activity.start_time"
          :link="'/activities/' + activity.alias" 
        />
      </div>
    </section>
  </main>
</template>

<script setup>
const { data: activities } = await useFetch('/api/activities')
const hatha = activities.value.filter(activity => activity.type === 'Hatha Yoga')

</script>

