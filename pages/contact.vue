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
  background-image: url('/img/contact/contact_us_main.jpg');
  background-size: cover;
  background-position: center;
  height: 60vh;
  overflow: hidden;
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
.section {
  padding: 60px 30px;
  text-align: center;
}
</style>

  

<script>
export default {
  name: "ContactUs"
};
</script>
