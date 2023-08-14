<template>
    <div style="margin-top: 5em;">
        <h1 style="color: blue;">{{ pageTitle }}</h1>
        <p>{{ pageContent }} </p>
    </div>
</template>

<script>
import "@/assets/globalCSS.css";

export default {
    data() {
        return {
            pageTitle: 'Hello, you are in a logged in user only area!',
            pageContent: 'Basic content'
        }
    }
}
</script>
