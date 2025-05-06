<template>
    <div class="container">
        <h1>OUR STORY</h1>

        <h2>Yoga Center </h2>

        <p class="intro">
            Our story was born from the heart, and it continues here in New York, thanks to you.
        </p>

        <p>What began as a dream has become reality, fueled by passion, dedication, and the trust
        of those who believed in us. SoulFlow NYC is not just a yoga studio, but a sanctuary in 
        the heart of the city, a space for connection, growth, and transformation.</p>
        <p>Every person who walks through our doors brings their own unique journey. 
        Here, we come together to slow down, breathe deeply, 
        and rediscover balance and well-being amidst the pulse of city life. 
        Yoga at SoulFlow NYC is not just movement, but an experience that supports and nourishes 
        you on and off the mat.</p>
        <p>We are a team of passionate, experienced teachers with the desire to share the transformative 
        power of yoga. We believe that through breath, flow, and mindfulness we can cultivate more joy,
        resilience, and strength. These are the qualities we all need in this vibrant, ever-moving city. <br />
        </p>
        <p>At SoulFlow NYC, you will find yoga styles for every body and every intention. We offer Ashtanga,
        Dynamic, Functional, Yoga Therapy, Weight Loss, and Postural Yoga. We also offer Pranayama 
        (breathwork) and Meditation classes to help complete your wellness journey.
        </p>

        <p class="bold">
         Come join us and bring the soul of yoga into your New York life.
        </p>

    </div>
</template>

<script>
export default {
  name: "OurStory"
};
</script>

<style scoped>
.container {
     max-width: 900px;
     margin: 40px auto;
     padding: 40px 30px;
     background-color: #eee6de;
     border-radius: 12px;
     font-family: 'Segoe UI', 'Arial', sans-serif;
     line-height: 1.8;
     color: #444;
     box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
 }


 h1 {
     font-size: 2.5rem;
     font-weight: 700;
     color: #b59f4b;
     margin-bottom: 10px;
     text-transform: uppercase;
     letter-spacing: 1px;
 }

 h2 {
     font-size: 1.8rem;
     font-weight: 600;
     color: #333;
     margin-top: 10px;
     margin-bottom: 20px;
 }

p {
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
    color: #555;
}
 
 .intro {
     font-weight: 600;
     font-size: 1.15rem;
     color: #333;
 }
 
 .bold {
     font-weight: 700;
     font-size: 1.15rem;
     color: #222;
     margin-top: 30px;
 }

 .divider {
     border: none;
     border-top: 2px solid #b59f4b;
     width: 60px;
     margin: 20px 0;
 }
 
@media screen and (max-width: 768px) {
    .container {
        padding: 20px 15px;
        margin: 20px;
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    p {
        font-size: 1rem;
    }
}

</style>
