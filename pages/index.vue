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
      <div class="container">
        <h2>Why SoulFlow NYC?</h2>
        <p>
          SoulFlow is not just a studio; it's your refuge from the noise.
          Here, mindful movement, intentional breath, and moments of stillness come
          together to restore balance and awaken your inner rhythm. Step inside, and discover
          a space designed to nourish your body, calm your mind, and uplift your spirit.
        </p>
        <NuxtLink to="/about" class="btn-secondary">Want to know more?</NuxtLink>
      </div>
    </section>

    <section class="section teachers">
      <TheParagraph image="/img/home/teachers.png" position="right">
        <h2>Meet the Soul Behind the Flow</h2>
        <p>
          Meet our passionate team of teachers, each one bringing a wealth of experience,
          a deep commitment to mindful movement, and their own distinctive teaching style.
          With compassion, authenticity, and heart, they’re here to support you on every
          step of your journey, helping you grow, heal, and reconnect through your practice.
        </p>
        <NuxtLink to="/teachers" class="btn-third">Meet our team</NuxtLink>
      </TheParagraph>
    </section>

    <section class="section courses">
      <div class="container">
        <h2>Don't know where to start?</h2>
        <div class="carousel">
          <TheSmallCard
            v-for="highlight in highlights"
            :key="highlight.courses.alias"
            :title="highlight.courses.name"
            :subtitle="highlight.ads"
            :link="`/activities/courses/${highlight.courses.alias}`"
          />
        </div>
      </div>
    </section>

    <section class="section upcoming">
      <div class="container">
        <h2>What's next?</h2>
        <p class="intro">
          Step into something greater than just a class. Be part of a vibrant community
          coming together through soulful events, mindful movement, and shared transformation.
        </p>
        <div class="carousel">
          <TheSmallCard
            v-for="event in events"
            :key="event.alias"
            :title="event.name"
            :subtitle="event.schedule"
            :link="`/activities/events/${event.alias}`"
          />
        </div>
      </div>
    </section>

    <section class="section contact">
      <div class="container contact-container">
        <div class="contact-form-container">
          <ContactForm />
        </div>
        <div class="contact-image-container">
          <img src="/img/home/soulflow_studio.png" alt="SoulFlow Studio" class="contact-image" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ContactForm from '~/components/ContactForm.vue'
import { computed } from 'vue'

const { data: activities } = await useFetch('/api/activities/events')
const events = computed(() =>
  activities.value
    .sort((a, b) => new Date(a.schedule) - new Date(b.schedule))
    .slice(0, 5)
)

const { data: highlights } = await useFetch('/api/highlight')
</script>

<style scoped>
.home-page { font-family: 'Segoe UI', sans-serif; color: #444 }
.container { max-width: 1200px; margin: 0 auto; padding: 0 20px }
.hero { position: relative; background: url('/img/home/hero.png') center/cover no-repeat; height: 60vh; display: flex; align-items: flex-end }
.hero .overlay { position: absolute; inset: 0; background: rgba(0, 0, 0, 0.5) }
.hero-content { position: relative; padding: 20px; text-align: center; color: #fff; width: 100% }
.hero-content h1 { font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 10px }
.hero-content p { font-size: clamp(1rem, 3vw, 1.5rem); margin-bottom: 20px }
.btn-primary { background-color: #b59f4b; color: #fff; padding: 0.75rem 1.5rem; border-radius: 6px; font-weight: 600; display: inline-block; transition: background 0.3s }
.btn-primary:hover { background-color: #ae8a45 }
.btn-secondary, .btn-third { background-color: rgba(62, 56, 49, 0.65); color: #fff; padding: 0.75rem 1.5rem; border-radius: 6px; font-weight: 600; display: inline-block; transition: background 0.3s }
.btn-secondary:hover, .btn-third:hover { background-color: rgba(62, 56, 49, 0.8) }
.section { padding: 60px 0 }
.about { background-color: rgba(94, 57, 19, 0.5); color: #fff; text-align: center }
.about h2 { font-size: clamp(1.8rem, 5vw, 2.5rem) }
.about p { font-size: clamp(1rem, 3vw, 1.2rem); max-width: 800px; margin: 20px auto }
.section.teachers { display: flex; align-items: center; gap: 40px; padding: 60px 0 }
@media (max-width: 768px) { .section.teachers { flex-direction: column; text-align: center; gap: 20px; padding: 40px 20px } .section.teachers img { margin: 0 auto; max-width: 80% } .section.teachers p { padding: 0 20px; margin-bottom: 20px } }
.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 24px;
  padding-bottom: 10px;
  margin-top: 30px;
}
.carousel > * {
  flex: 0 0 auto;
  scroll-snap-align: start;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  font-size: 0.9rem;
  max-width: 200px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  text-align: center;
}
@media (min-width: 769px) {
  .carousel {
    overflow: visible;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .carousel > * {
    margin: 0 12px 24px 0;
  }
}
.contact-container { display: flex; flex-wrap: wrap; gap: 20px; align-items: center }
.contact-form-container, .contact-image-container { flex: 1 1 300px }
.contact-image-container img { width: 100%; border-radius: 8px }
@media (max-width: 768px) { .hero { height: 50vh } .contact-container { flex-direction: column; align-items: center } .contact-form-container, .contact-image-container { flex: 1 1 100%; max-width: 100% } .contact-image-container img { margin: 0 auto } }
</style>
