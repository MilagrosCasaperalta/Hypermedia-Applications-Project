<template>
  <div class="home-page">

    <!-- Hero Section -->
    <section class="hero">
      <div class="overlay"></div>
      <div class="hero-content">
        <h1>SoulFlow NYC</h1>
        <p>Find your flow. Connect, breathe, and transform in the heart of New York City.</p>
        <NuxtLink to="/about" class="btn-primary">Learn More</NuxtLink>
      </div>
    </section>

    <!-- About Section -->
    <section class="section about">
      <h2>Why SoulFlow NYC?</h2>
      <p>
        SoulFlow is not just a studio; it's your refuge from the noise.
        Here, mindful movement, intentional breath, and moments of stillness come 
        together to restore balance and awaken your inner rhythm. Step inside, and discover 
        a space designed to nourish your body, calm your mind, and uplift your spirit.
      </p>
      <NuxtLink to="/about" class="btn-secondary">Want to know more?</NuxtLink>
    </section>

    <!-- Teachers Section -->
    <section class="section teachers">
      <TheParagraph 
        image='/img/home/teachers.png'
        position="right">
        <h2>Meet the Soul Behind the Flow</h2>
        <p>Meet our passionate team of teachers, each one bringing 
        a wealth of experience, a deep commitment to mindful movement, 
        and their own distinctive teaching style. With compassion, 
        authenticity, and heart, they’re here to support you on every 
        step of your journey, helping you grow, heal, and reconnect 
        through your practice.</p>
        <NuxtLink to="/teachers" class="btn-third">Meet our team</NuxtLink>
      </TheParagraph>
    </section>

    <!-- Courses Section -->
    <section class="courses">
      <h2>Don't know where to start?</h2>
      <div id="card-container">
        <TheSmallCard 
          v-for="highlight in highlights" 
          :title="highlight.courses.name"
          :subtitle="highlight.ads"
          :link="`/activities/courses/${highlight.courses.alias}`" 
        />
      </div>
    </section>

    <!-- Upcoming Events Section -->
    <section class="Up_Coming">
      <div class="up-coming-content">
        <h2>What's next?</h2>
        <h3>Step into something greater than just a class. 
          Be part of a vibrant community coming together through 
          soulful events, mindful movement, and shared transformation.
          Explore what’s coming next at SoulFlow NYC and find your place in a 
          journey that nourishes, connects, and inspires.</h3>
        <div id="card-container">
          <TheSmallCard 
            v-for="event in events" 
            :title="event.name"
            :subtitle="event.schedule"
            :link="`/activities/events/${event.alias}`" 
          />
        </div>
      </div>
    </section>

    <!-- Contact Section with Contact Form -->
    <section class="contact">
      <div class="contact-container">
        <!-- ContactForm on the left side -->
        <div class="contact-form-container">
          <ContactForm />
        </div>

        <!-- Image on the right side -->
        <div class="contact-image-container">
          <img src="/img/home/teachers.png" alt="SoulFlow Teachers" class="contact-image" />
        </div>
      </div>
    </section>
    
  </div>
</template>

<script setup>
import ContactForm from '~/components/ContactForm.vue';  // Import the ContactForm component

const { data: activities } = await useFetch('/api/activities/events')
const events = activities.value.sort((b, a) => new Date(b.schedule) - new Date(a.schedule))
  .slice(0, 5);

const { data: highlights } = await useFetch('/api/highlight')
</script>

<style scoped>
.home-page {
  font-family: 'Segoe UI', sans-serif;
}

/* Hero Section */
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

.teachers p {
  text-align: center;
  max-width: 600px;
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

.courses h2 {
  text-align: center;
}

.btn-secondary, .btn-third {
  background-color: #3e3831a1;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 20px;
  display: inline-block;
}

/* Upcoming Section */
.Up_Coming {
  background-color: #5e39137c;
  width: 100%;
  max-width: 1000px; /* Ensures the content doesn't stretch too far on large screens */
  margin: 0 auto; /* Centers the section */
  padding: 60px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  border-radius: 50px;
}

.up-coming-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 800px; /* Prevents the content from stretching too wide */
  margin: 0 auto; /* Centers the content */
}

.Up_Coming h2 {
  font-size: 2rem;
  color: white;
}

.Up_Coming h3 {
  font-size: 1.1rem;
  color: white;
  text-align: center;
  max-width: 800px;
}

#card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px; 
  margin-top: 30px;
}

#card-container > * {
  background-color: #5e3913b3;  
  color: white;
  padding: 5px;
  border-radius: 10px;
  font-size: 0.6rem;
  max-width: 200px;     
  width: 100%;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  text-align: center;
}

/* Contact Section Styles */
.contact {
  padding: 60px 30px;
}

.contact-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
}

.contact-form-container {
  flex: 1;
  min-width: 250;  /* Ensures it doesn't shrink too much */
}

.contact-image-container {
  flex: 1;
  min-width: 250px;  /* Ensures it doesn't shrink too much */
  text-align: center;
}

.contact-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
