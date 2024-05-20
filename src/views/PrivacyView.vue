<template>
    <div style="background: rgb(49, 51, 56); min-height: 100svh;">
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
                    This website issues 1st party secure http cookies and CSRF cookies for the purpose of tracking user
                    sessions.
                    These are only used if a user account is made and the user is
                    logged in.
                </li>
                <li>
                    The exception is any content that shows embedded YouTube videos,
                    and therefore uses 3rd party cookies from Google/Youtube. All these pages
                    should have a notice.
                </li>

            </ul>
            <h2>Under Development</h2>
            <ul style="margin-left: 2rem; text-align: left;">
                <li>
                    This site is under development and is, at times, rapidly changing. If there are errors or something
                    is done incorrectly,
                    it could be a development mistake of quickly putting things together and is not intentional.
                    There are endless things to polish and improve when it comes to web development, and as I learn
                    more, the sheer amount of details to
                    track
                    continually grows. Everytime I scan through the site I find something to improve! Major companies
                    with
                    some of the best software developers have bugs and issues in production code, so
                    one person developing a website will have them too.
                    Please send a message to the <router-link class="text-links link-color"
                        :to="{ path: '/about', hash: '#contact-form-section' }">contact</router-link> page if there is
                    an issue!
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

.link-color {
    color: rgb(120, 255, 61);
}
</style>