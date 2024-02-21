
<template>
    <div class="page-height">
        <div class="center-content">
            <main id="main-area">
                <h1>404 - Page Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <RouterLink to="/">
                    <button type="button" class="clean-button">To Home Page</button>
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
            const maxX = window.innerWidth - 50;
            const maxY = window.innerHeight - 50;

            const x = Math.min(e.clientX, maxX) - 50;
            const y = Math.min(e.clientY, maxY) - 50;

            cursorBg.style.left = `${x}px`;
            cursorBg.style.top = `${y}px`;
        });
    }    
});

</script>

<style scoped>
h1 {
    color: rgb(0, 255, 204);
}

.page-height {
    height: 86.5vh;
    background-color: rgb(255, 255, 255);
}

#cursor-bg {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: rgba(12, 253, 36, 0.2);
    box-shadow: 0 0 10px 10px rgba(12, 253, 36, 0.2);
    border-radius: 50%;  /* makes it circular */   
    pointer-events: none; /* allows clicks to pass through */    
    transition: transform 0.1s ease; /* smooth movement */
    
   
}


.center-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    cursor: none;
}
</style>





