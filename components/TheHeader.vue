<template>
  <header>
    <nav id="navigator_bar">
      <div class="nav-left">
        <NuxtLink to="/" class="logo">
          <img src="/logo.png" alt="SoulFlow Logo" />
        </NuxtLink>
      </div>
      <ul class="nav-links">
        <li class="dropdown">
          <NuxtLink to="/activities" class="drop">Our activities</NuxtLink>
          <ul class="drop-content">
            <li><NuxtLink to="/activities/pilates">Pilates</NuxtLink></li>
            <li><NuxtLink to="/activities/meditation">Meditation & Breathwork</NuxtLink></li>
            <li><NuxtLink to="/activities/therapy">Yoga Therapy</NuxtLink></li>
            <li><NuxtLink to="/activities/ashtanga">Ashtanga Yoga</NuxtLink></li>
            <li><NuxtLink to="/activities/hatha">Hatha Yoga</NuxtLink></li>   
            <li><NuxtLink to="/activities/yin">Yin Yoga</NuxtLink></li>   
            <li><NuxtLink to="/activities/vinyasa">Vinyasa Flow</NuxtLink></li>   
            <li><NuxtLink to="/activities/power">Power Yoga</NuxtLink></li>                                                
          </ul>
        </li>
        <li><NuxtLink to="/teachers">Our Teachers</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/contact">Contacts</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
function showChild() {
  child_class.value = "over_class"
}

function hideChild() {
  child_class.value = "out_class"
}


</script>

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
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.8);
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
.dropdown {
  position: relative;
}

.drop-content {
  list-style: none;
  padding-left: 0; 
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  padding: 20px;
  border-radius: 4px;
  z-index: 1000;
  background-color: #322A2A;

}

.dropdown:hover .drop-content {
  display: block;
}



</style>