<template>
    <div class="card">
        <img class="img" :src="path" alt="Card Image"/>
        <span class="title">{{ title }}</span>
        <span class="subtitle">{{ subtitle }}</span>
        <div>
        <NuxtLink :to = "link" ><button class="card_button"><span>More Details</span></button></NuxtLink>
        </div>
    </div>
</template>

<script setup>
  const props = defineProps({
    title: String,
    subtitle: String,
    path: String, 
    link: String
  });
</script>

<style>
.card {
  background-color: #fff8f0; /* tonalità calda più soft */
  border-radius: 16px;       /* angoli più arrotondati */
  box-shadow: 0 8px 20px rgba(99, 79, 55, 0.12); /* ombra più morbida e profonda */
  overflow: hidden;
  width: 280px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 16px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 16px 32px rgba(99, 79, 55, 0.25);
}

.img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom: 3px solid #d1b89d; /* bordo sottile caldo sotto l'immagine */
  display: block;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

.title {
  display: block;
  font-weight: 700;
  font-size: 1.25rem;
  margin: 16px 0 6px 0;
  color: #4b3a2a; /* marrone scuro */
  letter-spacing: 0.02em;
  text-transform: capitalize;
}

.subtitle {
  display: block;
  font-weight: 500;
  font-size: 1rem;
  color: #7c6751; /* marrone medio */
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.card_button {
  background-color: #8a6a4d; /* marrone caldo */
  border: none;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  padding: 10px 24px;
  border-radius: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 8px rgba(138, 106, 77, 0.4);
  user-select: none;
  margin: 0 auto;
  display: inline-block;
}

.card_button:hover,
.card_button:focus {
  background-color: #6f523a;
  box-shadow: 0 6px 14px rgba(111, 82, 58, 0.6);
  outline: none;
}

</style>