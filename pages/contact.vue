import TheMap from '~/components/TheMap.vue'


<template>
   <section class="hero">
      <div class="overlay"></div>
      <div class="hero-content">
        <h1>Contact SoulFlow NYC</h1>
        <p>Begin your journey with us.</p>
      </div>
    </section>

    <TheMap />

     <section class="section newsletter">
      <NewsletterForm />
    </section>

  </template>


<style scoped>
.hero {
  position: relative;
  height: 60vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  position: absolute;
  inset: 0;
  background-image: url('/img/contact/contact_us_main.JPG');
  background-size: cover;
  background-position: center;
  filter: blur(8px);
  transform: scale(1.05); /* hide blur edges */
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  padding: 0 20px;
  max-width: 700px;
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
  animation: fadeSlideIn 1.2s ease-out forwards;
  animation-delay: 0.6s;
  opacity: 0;
}
.section {
  padding: 60px 30px;
  text-align: center;
}
</style>



<style>
@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>