<template>
    <div style="background: rgb(49, 51, 56); height: 100svh;">
        <div class="container-80-em white">
            <!-- Your HTML here -->
            <h1 class="title-padding">Privacy Policy</h1>

            <h2>Form Submission</h2>
            <ul style="margin-left: 2rem; text-align: left;">
                <li>
                    All message data is validated, then sent securely via https
                </li>
                <li>
                    The only data recorded is: Name, Email, Message, and a Timestamp
                </li>
                <li>
                    Only used for contacting purposes, and will not be shared with any 3rd parties,
                    please do not share sensitive personal information
                </li>
                <li>
                    Data is only used as long as needed for contact purposes.
                    If a message was sent in error, please reference the message and contact for removal
                </li>
            </ul>

            <h2>Cookies</h2>
            <ul style="margin-left: 2rem; text-align: left;">
                <li>
                    This website <u>currently</u> uses no cookies, this is by design.
                </li>
                <li>
                    The exception is my new Country Music Generator project that shows some embedded YouTube videos,
                    and therefore uses 3rd party cookies from Google/Youtube.
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const data = ref(null);

</script>

<style scoped>
.title-padding {
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 3rem;
}

h2 {
    text-align: left;
}
</style>