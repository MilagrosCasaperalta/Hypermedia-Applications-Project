<template>
    <header>
        <nav id="navigator_bar">
            <ul>
                <li><NuxtLink to="/activities">Our activities</NuxtLink></li>
                <li><NuxtLink to="/teachers">Our Teachers</NuxtLink></li>
                <li><NuxtLink to="/about">About us</NuxtLink></li>
                <li><NuxtLink to="/contact">Contact us</NuxtLink></li>
                <li><NuxtLink to="/highlights">Highlights</NuxtLink></li>
            </ul>
        </nav>
    </header>
    <main>

    </main>
</template>


<style scoped>
   #navigator_bar {
    background-color: #322A2A;
    padding: 16px 32px;
    width: 100%;
    margin: 0;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

#navigator_bar ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
}

#navigator_bar li {
    transition: transform 0.2s ease;
}

#navigator_bar li:hover {
    transform: scale(1.05);
}

#navigator_bar a {
    color: #ffffff;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    position: relative;
    padding: 6px 4px;
    transition: color 0.3s ease;
}

/* Underline on hover and active with animation */
#navigator_bar a::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    left: 0;
    bottom: -4px;
    background-color: #b59f4b;
    transition: width 0.3s;
}

#navigator_bar a:hover::after,
#navigator_bar a.router-link-active::after {
    width: 100%;
}

</style>
