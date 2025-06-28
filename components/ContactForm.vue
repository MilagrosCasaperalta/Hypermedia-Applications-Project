<template>
  <div class="contact-form-container">
    <h2 class="form-title">Contact Us</h2>
    <form @submit.prevent="handleSubmit" class="contact-form">
      <div class="form-group">
        <label for="email">Your Email:</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          required
          placeholder="Enter your email"
        />
      </div>
      <div class="form-group">
        <label for="problem">Your message:</label>
        <textarea
          id="problem"
          v-model="formData.problem"
          required
          placeholder="Please, write as much detail as possible"
        ></textarea>
      </div>
      <input type="hidden" name="Status" value="new" />
      <div class="form-actions">
        <button type="submit" :disabled="loading">{{ loading ? 'Submitting...' : 'Submit Ticket' }}</button>
      </div>
    </form>
    <p v-if="message" :class="{ success: success, error: !success }">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  email: '',
  problem: ''
})

const loading = ref(false)
const message = ref('')
const success = ref(false)

async function handleSubmit() {
  loading.value = true
  message.value = ''
  success.value = false

  try {
    await $fetch('/api/contact/submit', {
      method: 'POST',
      body: formData.value
    })
    message.value = 'Thank you for contacting us! We will get back to you soon.'
    success.value = true
    formData.value = { email: '', problem: '' }
  } catch (e) {
    message.value = 'Something went wrong. Please try again later.'
    success.value = false
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.contact-form-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.form-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.contact-form {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1 1 45%;
}

label {
  font-size: 1rem;
  color: #333;
}

input[type="email"],
textarea {
  padding: 8px 14px;
  font-size: 0.9rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
  transition: border 0.3s ease;
}

input[type="email"]:focus,
textarea:focus {
  border: 1px solid #4CAF50;
}

textarea {
  resize: vertical;
  height: 120px;
}

.form-actions {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  flex: 1 1 100%;
}

button {
  padding: 12px 20px;
  background-color: #8a6a4d; /* Same color as the 'Join' button in the newsletter */
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:disabled {
  background-color: #bfae9a;
}

button:hover:not(:disabled) {
  background-color: #7a5e3c; /* Darker shade for hover effect */
}

p {
  font-size: 0.9rem;
  text-align: center;
  margin-top: 15px;
}

p.success {
  color: #27ae60;
}

p.error {
  color: #e74c3c;
}
</style>
