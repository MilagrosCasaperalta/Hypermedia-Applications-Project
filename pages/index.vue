<template>
  <div class="home-page">

    <section class="hero">
      <div class="overlay"></div>
      <div class="hero-content">
        <h1>SoulFlow NYC</h1>
        <p>Find your flow. Connect, breathe, and transform in the heart of New York City.</p>
      <NuxtLink to="/about" class="btn-primary">Learn More</NuxtLink>
      </div>
    </section>


 <section class="section about">

  <h2>Why SoulFlow NYC?</h2>
  <p>
    SoulFlow is not just a studio; it's your refuge from the noise.
     Here, mindful movement, intentional breath, and moments of stillness come 
     together to restore balance and awaken your inner rhythm. Step inside, and discover 
     a space designed to nourish your body, calm your mind, and uplift your spirit.
  </p>
   <NuxtLink to="/activities" class="btn-secondary">Want to know more?</NuxtLink>
 
</section>

<section class="section teachers">
  <TheParagraph 
  image='/img/home/teachers.png'
   position="right">
  <h2>Meet the Soul Behind the Flow</h2>
  <p>Get to know our dedicated teachers, each bringing their own experience, heart, and unique style to guide you through your practice.</p>
  <NuxtLink to="/teachers" class="btn-third">Meet our team</NuxtLink>
  </TheParagraph>

</section>


    <section class="Up_Coming">
      <div>
        <h3>Upcoming</h3>
      </div>
      <div id="card-container">
        <TheSmallCard 
          v-for="activity in event" 
          :key="activity.id"
          :name="activity.name"
          :schedule="activity.schedule"
          :location="activity.location"
          :teacherList="activity.teachers"
          :type="activity.types.name"
          :typeLink="`/activities/${activity.types.alias}`"
        />
      </div>
    </section>
    <section class="highlight">
      <div>
        <h3>Highlight</h3>
      </div>
      <div id="card-container">
        <TheSmallCard 
          v-for="activity in highlight" 
          :name="activity.activities.name"
          :ads="activity.ads"
          :schedule="activity.activities.schedule"
          :location="activity.activities.location"
          :teacherList="activity.activities.teachers_activities"
          :type="activity.activities.types.name"
          :typeLink="`/activities/${activity.activities.types.alias}`"
        />
      </div>
    </section>

  </div>
</template>

<script setup>

const { data: activities } = await useFetch('/api/activities/all')
const event = activities.value.filter(activities =>
  activities.types.name === 'Seminar' ||
  activities.types.name === 'Workshop' ||
  activities.types.name === 'Retreat' ||
  activities.types.name === 'Lecture'
).sort((b, a) => new Date(b.schedule) - new Date(a.schedule))
  .slice(0, 5);

const { data: highlight } = await useFetch('/api/highlight')

</script>

<style scoped>
.home-page {
  font-family: 'Segoe UI', sans-serif;
}

.hero {
  position: relative;
  background-image: url('/img/home/hero.png');
  background-size: cover;
  background-position: center;
  height: 60vh;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4); 
  z-index: 0;
}

.hero-content {
  position: absolute;
  z-index: 1;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  max-width: 700px;
  padding: 0 20px;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  color: white;
}

.hero-content p {
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: white;
}

.btn-primary {
  background-color: #b59f4b;
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
}

.section {
  padding: 60px 30px;
  text-align: center;
}

.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 30px;
  text-align: center;
  background-color: #5e39137c;
  color: white;
}

.about p {
  text-align: center;
  max-width: 800px;
  justify-content: center;
  font-size: 1.1rem;
}

.card-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin-top: 30px;
}

.card-link {
  text-decoration: none;
}

.cta {
  background-color: #fdfaf6;
}

.btn-secondary {
  background-color: #3e3831a1;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 20px;
  display: inline-block;
}

.btn-third {
  background-color: #3e3831a1;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 20px;
  display: inline-block;
}

</style>
