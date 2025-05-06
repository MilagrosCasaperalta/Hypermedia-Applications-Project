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
        padding: 10px 20px;
        width: 100vw;
        margin: 0;
        box-sizing: border-box;
    }

        #navigator_bar ul {
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 30px;
            margin: 0;
            padding: 0;
        }

        #navigator_bar li {
        }

        #navigator_bar a {
            color: white;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 1px;
            position: relative;
        }

            #navigator_bar a:hover,
            #navigator_bar a.router-link-active {
                text-decoration: underline;
            }
</style>
