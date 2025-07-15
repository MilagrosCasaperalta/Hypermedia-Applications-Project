 <!-- Map component that show the address of yoga center -->


<template>
  <section class="contact-map-section">
    <div class="contact-info">
      <h2>Visit Us</h2>
      <p><strong>Address:</strong> Manhattan, New York, NY</p>
      <p><strong>Phone:</strong> (123) 456-7890</p>
      <p><strong>Email:</strong> soul.flow.ny@gmail.com</p>
    </div>

    <div class="map-container">
      <iframe
        :src="googleMapLink"
        width="100%"
        height="100%"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </section>
</template>


<script setup>
const googleMapLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.35377155337!2d-74.05163129619848!3d40.75903219789612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20Stati%20Uniti!5e0!3m2!1sit!2sit!4v1748767827946!5m2!1sit!2sit"
</script>


<style scoped>
.contact-map-section {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 40px 20px;
  background-color: #f8f8f8;
}

.contact-info {
  flex: 1;
  min-width: 280px;
  max-width: 400px;
}

.map-container {
  flex: 2;
  min-width: 300px;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
}
</style>
