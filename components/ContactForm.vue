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
          placeholder="Please, write here your message"
        ></textarea>
      </div>
      <input type="hidden" name="Status" value="new" />
      <div class="form-actions">
        <button type="submit" :disabled="loading">{{ loading ? 'Sending...' : 'Send Message' }}</button>
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
  max-width: 600px; /* Ridotto per essere più compatto */
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  font-family: 'Helvetica', 'Arial', sans-serif;
}

.form-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  font-weight: 600;
}

.contact-form {
  display: flex;
  flex-direction: column; /* Disposizione verticale */
  gap: 15px; /* Ridotto lo spazio tra i campi */
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-size: 1.1rem;
  color: #333;
  font-weight: 500;
}

input[type="email"],
textarea {
  padding: 12px 16px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: border 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

input[type="email"]:focus,
textarea:focus {
  border: 1px solid #4CAF50;
  box-shadow: 0 2px 8px rgba(0, 128, 0, 0.2);
}

textarea {
  resize: vertical;
  height: 120px;
}

.form-actions {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

button {
  padding: 12px 24px;
  background-color: #8a6a4d;
  color: white;
  font-size: 1.1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:disabled {
  background-color: #bfae9a;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #7a5e3c;
  transform: translateY(-2px);
}

p {
  font-size: 1rem;
  text-align: center;
  margin-top: 20px;
}

p.success {
  color: #27ae60;
  font-weight: 500;
}

p.error {
  color: #e74c3c;
  font-weight: 500;
}
</style>
