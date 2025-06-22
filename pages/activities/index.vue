<template>
  <main>
    <section class="activity-section">
      <h1>Meet Our Activities</h1>

      <div>
        <h3>Course</h3>
      </div>
      <div id="card-container">
        <TheSmallCard 
          v-for="activity in courses" 
          :name="activity.name"
          :schedule="activity.schedule"
          :location="activity.location"
          :teacherList="activity.teachers"
          :type="activity.types.name"
          :typeLink="`/activities/${activity.types.alias}`"
        />
      </div>

      <div>
        <h3>Event</h3>
      </div>
      <div id="card-container">
        <TheSmallCard 
          v-for="activity in event" 
          :name="activity.name"
          :schedule="activity.schedule"
          :location="activity.location"
          :teacherList="activity.teachers"
          :type="activity.types.name"
          :typeLink="`/activities/${activity.types.alias}`"
        />
      </div>
    </section>
  </main>
</template>


<script setup>
const { data: activities } = await useFetch('/api/activities/all')

const courses = activities.value.filter(activities =>
  activities.types.name === 'Ashtanga' ||
  activities.types.name === 'Pilates' ||
  activities.types.name === 'Meditation' ||
  activities.types.name === 'Therapy'
)

const event = activities.value.filter(activities =>
  activities.types.name === 'Seminar' ||
  activities.types.name === 'Workshop' ||
  activities.types.name === 'Retreat' ||
  activities.types.name === 'Lecture'
)


</script>
