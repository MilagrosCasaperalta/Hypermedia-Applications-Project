 <!-- The navigator bar -->

<template>
  <header class="site-header">
    <details class="mobile-menu">
      <summary class="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </summary>
      <ul class="mobile-nav">
        <li><NuxtLink to="/activities/courses/">Courses</NuxtLink></li>
        <li><NuxtLink to="/activities/events/">Events</NuxtLink></li>
        <li><NuxtLink to="/teachers">Our Teachers</NuxtLink></li>
        <li><NuxtLink to="/about">About Us</NuxtLink></li>
        <li><NuxtLink to="/contact">Contacts</NuxtLink></li>
      </ul>
    </details>

    <nav class="desktop-nav" id="navigator_bar">
      <div class="nav-left">
        <NuxtLink to="/" class="logo">
          <img src="/logo.png" alt="SoulFlow Logo" />
        </NuxtLink>
      </div>
      <ul class="nav-links">
        <li class="dropdown">
          <NuxtLink to="/activities" class="drop">Our activities</NuxtLink>
          <ul class="drop-content">
            <li><NuxtLink to="/activities/courses/">Courses</NuxtLink></li>
            <li><NuxtLink to="/activities/events/">Events</NuxtLink></li>
          </ul>
        </li>
        <li><NuxtLink to="/teachers">Our Teachers</NuxtLink></li>
        <li><NuxtLink to="/about">About Us</NuxtLink></li>
        <li><NuxtLink to="/contact">Contacts</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style>
.site-header {
  display: flex;
  align-items: center;
  background-color: #322A2A;
  padding: 12px 24px;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.8);

  font-family: 'Segoe UI', sans-serif;
  font-size: 16px;
  line-height: 1.7;
}

.desktop-nav { display: none; }

@media (max-width: 768px) {
  .mobile-menu {
    display: block;
    margin-left: auto;
    position: relative;
  }
  .mobile-menu summary::-webkit-details-marker,
  .mobile-menu summary::marker {
    display: none;
  }
  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 30px;
    cursor: pointer;
    padding: 5px;
  }
  .hamburger span {
    height: 3px;
    background: #fff;
    border-radius: 2px;
    transition: transform .2s ease, opacity .2s ease;
  }
  .mobile-menu[open] .hamburger span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  .mobile-menu[open] .hamburger span:nth-child(2) {
    opacity: 0;
  }
  .mobile-menu[open] .hamburger span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
  .mobile-nav {
    position: absolute;
    top: 100%;
    right: 0;
    margin: 0;
    padding: 1rem;
    list-style: none;
    background: #322A2A;
    transform-origin: top right;
    transform: scaleY(0);
    transition: transform .3s ease;
    width: 200px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
  .mobile-menu[open] .mobile-nav {
    transform: scaleY(1);
  }
  .mobile-nav li {
    position: relative;
    margin: 0.5rem 0;
    border-radius: 4px;
    overflow: hidden;
  }
  .mobile-nav li:hover {
    background: #4a4242;
  }
  .mobile-nav a {
    display: block;
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    padding: 8px 0;
    position: relative;
  }
  .mobile-nav a::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 0;
    width: 0;
    height: 2px;
    background: #b59f4b;
    transition: width .3s ease;
  }
  .mobile-nav a:hover::after {
    width: 100%;
  }
}

@media (min-width: 769px) {
  .mobile-menu { display: none; }
  .desktop-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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
  .nav-links a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #b59f4b;
    transition: width 0.3s ease;
  }
  .nav-links a:hover::after,
  .nav-links a.router-link-active::after {
    width: 100%;
  }
  .dropdown { position: relative; }
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

  .drop-content li + li {
    margin-top: 12px;
  }
}
</style>
