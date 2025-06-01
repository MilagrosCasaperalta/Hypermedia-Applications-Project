<template>
  <footer>
    <div class="footer-content">
      <span class="footer-title">2025 SoulFlow NYC. All rights reserved.</span>
      <div class="social-icons">
        <a href="https://instagram.com/soulflownyc" target="_blank">
          <img src="/img/footer/instagram.png" alt="Instagram" />
        </a>
        <a href="https://facebook.com/soulflownyc" target="_blank">
          <img src="/img/footer/facebook.png" alt="Facebook" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #322A2A;
  padding: 20px 0;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.social-icons {
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
}

.social-icons img {
  width: 24px;
  height: 24px;
  transition: opacity 0.3s;
}

.social-icons img:hover {
  opacity: 0.7;
}

.footer-title {
  color: white;
  font-size: 1rem;
  font-weight: 300;
}
</style>
