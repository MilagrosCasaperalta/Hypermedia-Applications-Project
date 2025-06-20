<template>
  <form @submit.prevent="handleSubmit" class="newsletter-form">
    <input
      id="email"
      type="email"
      v-model="email"
      placeholder="Write your email"
      required
    />
    <button type="submit" :disabled="loading">{{ loading ? 'Sending...' : 'Join' }}</button>
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
    await $fetch('/api/newsletter/subscribe', {
      method: 'POST',
      body: { email: email.value }
    })
    message.value = 'Thank you for subscribing! Please check your inbox 📬'
    success.value = true
    email.value = ''
  } catch (e) {
    message.value = 'Something went wrong. Please try again later.'
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
}

.newsletter-form input {
  padding: 0.6rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.newsletter-form button {
  padding: 0.6rem 1rem;
  background-color: #8a6a4d;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.newsletter-form button:disabled {
  background-color: #bfae9a;
}

.newsletter-form p {
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
