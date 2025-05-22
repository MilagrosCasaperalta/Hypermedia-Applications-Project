<template>
  <form @submit.prevent="handleSubmit" class="newsletter-form">
    <label for="email">Join our newsletter</label>
    <input
      id="email"
      type="email"
      v-model="email"
      placeholder="Write your email"
      required
    />
    <button type="submit" :disabled="loading">
      {{ loading ? 'Sending...' : 'Join' }}
    </button>
    <p v-if="message" :class="{ success: success, error: !success }">{{ message }}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const loading = ref(false)
const message = ref('')
const success = ref(false)

async function handleSubmit() {
  loading.value = true
  message.value = ''
  success.value = false

  try {
    // Qui fai la chiamata al tuo backend o API di newsletter
    // Esempio: await $fetch('/api/newsletter/subscribe', { method: 'POST', body: { email: email.value } })

    // Per demo, simuliamo una risposta positiva dopo 1 secondo
    await new Promise(r => setTimeout(r, 1000))

    message.value = 'Thank you for subscribing!'
    success.value = true
    email.value = ''
  } catch (e) {
    message.value = 'Try again later. Something went wrong.'
    success.value = false
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.newsletter-form {
  max-width: 400px;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  font-family: 'Segoe UI', sans-serif;
}

.newsletter-form input {
  padding: 0.6rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.newsletter-form button {
  padding: 0.6rem 1rem;
  background-color: #8a6a4d;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.newsletter-form button:disabled {
  background-color: #bfae9a;
  cursor: not-allowed;
}

.newsletter-form p {
  margin: 0;
  font-size: 0.9rem;
  text-align: center;
}

.newsletter-form p.success {
  color: #27ae60;
}

.newsletter-form p.error {
  color: #e74c3c;
}
</style>
