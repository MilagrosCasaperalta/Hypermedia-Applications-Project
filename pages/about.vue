<template>

        <TheParagraph image='/img/about/first_about.png'
                      image-cap=''
                      position="right"
                      imageWidth='80%'>

            
                <div>
                  
                        <h2>How it started</h2>
             
                    Nestled in the heart of New York City, SoulFlow NYC began as a simple idea:
                    to create a sanctuary for stillness in a city that never slows down.
                    In 2021, after years of teaching yoga in crowded studios and living through the
                    intensity of city life, founder Lena Torres felt a calling to build something
                    more personal. Something softer. Something rooted in soul.
                    What started as a few quiet rooftop classes in Brooklyn soon blossomed
                    into a small but vibrant community of students seeking deeper connection,
                    not just with their bodies, but with their breath, their inner world, and
                    each other.
                </div>
      
        </TheParagraph>



      <TheParagraph image = '/img/about/second_about.png'
                   image-cap= "people in class chillin"
                   position = "left"
                   imageWidth='80%'>

      
              <div>
                  <h2>Our Values</h2>
                  At SoulFlow NYC, yoga is more than a sequence of movements.
                  It is a practice of presence, compassion, and connection.
                  We believe that the journey inward is just as important as the strength
                  we build on the mat.

                  Our classes are rooted in mindfulness and guided by breath.
                  We welcome all bodies, all backgrounds, and all levels of experience.
                  Whether you're here to stretch, to sweat, or to simply find stillness,
                  you are in the right place.

                  We move with purpose, honor the wisdom of the body, and create space
                  for quiet reflection. SoulFlow is a place to let go of comparison,
                  listen deeply, and return to what matters.
              </div>
   

        </TheParagraph>

<TheParagraph image = '/img/about/third_about.png'
                   image-cap= "people in class chillin"
                   position = "right"
                   imageWidth='80%'>

    
              <div>
                  <h2>Our Mission</h2>
                  We believe that yoga is more than a physical 
                  discipline; it is a powerful tool for cultivating 
                  presence, self-awareness, and compassion. Whether you're 
                  stepping onto the mat for the first time or deepening an 
                  established practice, we are here to support your unique path 
                  with intention and care.
                  Through thoughtful classes, community gatherings, and conscious outreach, 
                  we aim to make wellness accessible and meaningful for all: one breath, one flow, 
                  one soul at a time.
              </div>
      
      
        </TheParagraph>
</template>

<script>
import TheParagraph from '@/components/TheParagraph.vue'
export default {
  name: "AboutUs"
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
     margin-left: 60px;
     text-transform: uppercase;
     letter-spacing: 1px;
 }

    h2 {
        font-size: 1.5rem;
        font-weight: 0;
        color: #b59f4b;
      
        text-transform: uppercase;
        letter-spacing: 1px;
    }


    ul {
        font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60vh; 
        margin: 0; 
    }

    div {
        
        font-size: 1.1rem;
        margin-bottom: 1.2rem;
        color: #555;
        text-align: center;
    }

@media screen and (max-width: 768px) {
    .container {
        padding: 20px 15px;
        margin: 20px;
    }

    h1 {
        font-size: 2rem;
    }


    p {
        font-size: 1rem;
    }


     .paragraph-image {
    width: 50%; 
  }
  .paragraph-text {
    width: 50%;
  }
}

@media (min-width: 720px) {
  .paragraph-image {
    width: 30%; 
  }
  .paragraph-text {
    width: 70%;
  }
}



</style>
