<template>
  <main>
    <section class="activity-section">
      <h1>Meet Our Activity</h1>
      <div id="card-container">
        <h3>Pilates</h3>
        <TheSmallCard 
          v-for="activity in activities" 
          :title="activity.name"
          :subtitle="activity.type"
          :link="'/activities/' + activity.alias" 
        />
      </div>
    </section>
  </main>
</template>

<script setup>
const { data: activities } = await useFetch('/api/activities')

</script>
