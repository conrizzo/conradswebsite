
<template>
    <div class="page-height">
        <div class="center-content">
            <main id="main-area">
                <!--
                <div class="center-element">
                    <img src="@/images/BlueSkyBird.jpg" height="200" alt="404 - Page Not Found" />
                </div>
                -->
                <h1>404 - Page Not Found!</h1>
                <p style="color: #ffffff;">Sorry, the page you are looking for does not exist!</p>
                <RouterLink class="text-links to-home-page" to="/">
                    To Home Page &rarr;
                </RouterLink>
                <div id="cursor-bg"></div>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const title = ref('404 - Page Not Found');

onMounted(() => {
    document.title = title.value;

    const cursorBg = document.getElementById('cursor-bg');

    if (cursorBg) {
        document.addEventListener('mousemove', (e) => {
            const maxX = window.innerWidth - 113;
            const maxY = window.innerHeight - 100;

            const x = Math.min(e.clientX, maxX) - 100;
            const y = Math.min(e.clientY, maxY) - 100;

            cursorBg.style.left = `${x}px`;
            cursorBg.style.top = `${y}px`;
        });
    }
});

</script>

<style scoped>
h1 {
    color: rgb(0, 255, 204);
    font-size: 3rem;
}

.page-height {
    height: 86.5vh;
    background-color: rgb(26, 26, 32);
}

.to-home-page {
    margin-top: 1rem;
    font-size: 2rem;
    text-decoration: none;
    color: rgb(0, 255, 204);
}

#cursor-bg {
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: rgba(0, 255, 204, 0.15);
    box-shadow: 0 0 100px 50px rgba(0, 255, 204, 0.15);
    border-radius: 50%;
    /* makes it circular */
    pointer-events: none;
    /* allows clicks to pass through */
    transition: transform 0.1s ease;
    /* smooth movement */
    filter: blur(1.5rem);
}

.center-element {
    display: flex;
    justify-content: center;
}

.center-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    height: 100%;
}
</style>





