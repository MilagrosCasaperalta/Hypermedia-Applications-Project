<template>


        <h1>About us</h1>

        <TheParagraph image = '/about/first_about.jpg'
                   image-cap= ''
                   position = "right"
                   imageWidth='80%'>
        <p>First paragraph - temp message </p>
        

        </TheParagraph>



      <TheParagraph image = '/about/second_about.jpg'
                   image-cap= "people in class chillin"
                   position = "left"
                   imageWidth='80%'>

       
        <p>Second paragraph - temp message </p>

        </TheParagraph>

<TheParagraph image = '/about/third_about.jpg'
                   image-cap= "people in class chillin"
                   position = "right"
                   imageWidth='80%'>

         <p>Third paragraph - temp message </p>
      
        </TheParagraph>

         

</template>

<script>
import TheParagraph from '@/components/TheParagraph.vue'
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
     margin-left: 60px;
     text-transform: uppercase;
     letter-spacing: 1px;
 }



p {
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
    color: #555;
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
}

</style>
