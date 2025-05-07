<template>
  <header>
    <nav id="navigator_bar">
      <div class="nav-left">
        <NuxtLink to="/" class="logo">
          <img src="/logo.png" alt="SoulFlow Logo" />
        </NuxtLink>
      </div>
      <ul class="nav-links">
        <li><NuxtLink to="/activities">Our activities</NuxtLink></li>
        <li><NuxtLink to="/teachers">Our Teachers</NuxtLink></li>
        <li><NuxtLink to="/about">About us</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact us</NuxtLink></li>
        <li><NuxtLink to="/highlights">Highlights</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>


<style scoped>
#navigator_bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #322A2A;
  padding: 12px 24px;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.nav-left .logo img {
  height: 40px;
  cursor: pointer;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  position: relative;
  padding: 4px 6px;
  transition: color 0.3s ease;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #b59f4b;
}

</style>
