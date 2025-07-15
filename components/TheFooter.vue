<template>
  <footer>
    <div class="footer-content">
    
      <div class="footer-section">
        <h3>Menu</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/activities">Activities</a></li>
           <li><a href="/teachers">Our Teachers</a></li>
          <li><a href="/about">About us</a></li>
          <li><a href="/contact">Contact us</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Contacts</h3>
        <p>SoulFlowContact@soulflow.com</p>
        <p>(123) 456-7890</p>
        <p>Manhattan, New York, NY</p>
        <div class="social-icons">
          <a href="https://instagram.com/soulflownyc" target="_blank">
            <img src="/img/footer/instagram.png" alt="Instagram" />
          </a>
          <a href="https://facebook.com/soulflownyc" target="_blank">
            <img src="/img/footer/facebook.png" alt="Facebook" />
          </a>
        </div>
      </div>

      <div class="footer-section">
        <h3>Stay Connected</h3>
        <NewsletterForm />
      </div>
    </div>

    <div class="footer-bottom">
      <span>© 2025 SoulFlow NYC. All rights reserved.</span>
      <div class="legal-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import NewsletterForm from './NewsletterForm.vue'
</script>

<style scoped>
footer {
  background-color: #322A2A;
  color: white;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-section {
  flex: 1;
  min-width: 220px;
}

.footer-section h3 {
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section li {
  margin-bottom: 0.4rem;
}

.footer-section a {
  color: #fff;
  text-decoration: none;
}

.footer-section a:hover {
  text-decoration: underline;
}

.social-icons {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.social-icons img {
  width: 24px;
  height: 24px;
  transition: opacity 0.3s;
}

.social-icons img:hover {
  opacity: 0.7;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-top: 1px solid #555;
  padding-top: 1rem;
  margin-top: 2rem;
  font-size: 0.9rem;
}

.legal-links {
  display: flex;
  gap: 1rem;
}

.legal-links a {
  color: #ccc;
  text-decoration: none;
  font-size: 0.85rem;
}

.legal-links a:hover {
  color: white;
}
</style>
