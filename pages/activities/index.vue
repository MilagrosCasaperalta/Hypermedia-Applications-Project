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
      <div>
        <h3>Ashtanga Yoga</h3>
      </div>
      <div id="card-container">
        <TheSmallCard 
          v-for="activity in ashtanga" 
          :title="activity.name"
          :subtitle="activity.start_time"
          :link="'/activities/' + activity.alias" 
        />
      </div>
      <div>
        <h3>Meditation & Breathwork</h3>
      </div>
      <div id="card-container">
        <TheSmallCard 
          v-for="activity in meditation" 
          :title="activity.name"
          :subtitle="activity.start_time"
          :link="'/activities/' + activity.alias" 
        />
      </div>
      <div>
        <h3>Yoga Therapy</h3>
      </div>
      <div id="card-container">
        <TheSmallCard 
          v-for="activity in therapy" 
          :title="activity.name"
          :subtitle="activity.start_time"
          :link="'/activities/' + activity.alias" 
        />
      </div>
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
      <div>
        <h3>Power Yoga</h3>
      </div>
      <div id="card-container">
        <TheSmallCard 
          v-for="activity in power" 
          :title="activity.name"
          :subtitle="activity.start_time"
          :link="'/activities/' + activity.alias" 
        />
      </div>
      <div>
        <h3>Yin Yoga</h3>
      </div>
      <div id="card-container">
        <TheSmallCard 
          v-for="activity in yin" 
          :title="activity.name"
          :subtitle="activity.start_time"
          :link="'/activities/' + activity.alias" 
        />
      </div>
      <div>
        <h3>Vinyasa Flow</h3>
      </div>
      <div id="card-container">
        <TheSmallCard 
          v-for="activity in vinyasa" 
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
const pilates = activities.value.filter(activity => activity.type === 'Pilates')
const ashtanga = activities.value.filter(activity => activity.type === 'Ashtanga Yoga')
const meditation = activities.value.filter(activity => activity.type === 'Meditation & Breathwork')
const therapy = activities.value.filter(activity => activity.type === 'Yoga Therapy')
const hatha = activities.value.filter(activity => activity.type === 'Hatha Yoga')
const power = activities.value.filter(activity => activity.type === 'Power Yoga')
const yin = activities.value.filter(activity => activity.type === 'Yin Yoga')
const vinyasa = activities.value.filter(activity => activity.type === 'Vinyasa Flow')

</script>
