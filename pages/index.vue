<template>
  <div class="home-page">

    <section class="hero">
      <div class="overlay"></div>
      <div class="hero-content">
        <h1>Welcome to SoulFlow NYC</h1>
        <p>Find your flow. Connect, breathe, and transform in the heart of New York City.</p>
        <NuxtLink to="/about" class="btn-primary">Learn More</NuxtLink>
      </div>
    </section>

    <section class="section about">
      <h2>Why Choose SoulFlow?</h2>
      <p>We are more than a studio — we are a sanctuary. A place where movement, breath, and stillness meet to create harmony in your life.</p>
    </section>

    <section class="section classes">
      <h2>Our Classes</h2>
      <div class="card-grid">
        <NuxtLink
          v-for="(c, i) in classes"
          :key="i"
          :to="'/activities'"
          class="card-link"
        >
          <Card :title="c.title" :path="c.path" />
        </NuxtLink>
      </div>
    </section>

    <section class="section cta">
      <h2>Ready to Begin Your Journey?</h2>
      <p>We can't wait to welcome you.</p>
      <NuxtLink to="/contact" class="btn-secondary">Contact Us</NuxtLink>
    </section>

  </div>
</template>

<script setup>
import Card from '@/components/TheCard.vue'

const classes = [
  { title: 'Ashtanga Yoga', path: '/img/classes/ashtanga.png' },
  { title: 'Yoga Therapy', path: '/img/classes/therapy.png' },
  { title: 'Meditation & Breathwork', path: '/img/classes/meditation.png' },
  { title: 'Pilates', path: '/img/classes/pilates.png' },
]
</script>

<style scoped>
.home-page {
  font-family: 'Segoe UI', sans-serif;
}

.hero {
  position: relative;
  background-image: url('/img/hero.png');
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

.about p {
  max-width: 800px;
  margin: 0 auto;
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
  background-color: #322A2A;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 20px;
  display: inline-block;
}

</style>
